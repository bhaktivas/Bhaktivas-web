'use client';

import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import SafeImage from './SafeImage';

/**
 * Resilient Video Player supporting MP4 & HLS (.m3u8) streams.
 * Integrates hls.js for non-Safari browsers and triggers load()/play() on mount.
 */
export default function VideoPlayer({
  src,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = true,
  className = '',
  style = {},
  onEnded = undefined,
  onError = undefined,
}) {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const onErrorRef = useRef(onError);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);

  useEffect(() => {
    setHasError(false);
    const videoEl = videoRef.current;
    if (!videoEl || !src) return;

    // Clean up previous HLS instance if any
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    const isHls = typeof src === 'string' && src.includes('.m3u8');
    const isNativeHlsSupported = Boolean(videoEl.canPlayType('application/vnd.apple.mpegurl'));

    videoEl.muted = Boolean(muted);
    videoEl.setAttribute('playsinline', 'true');
    videoEl.setAttribute('muted', '');

    if (isHls && Hls.isSupported()) {
      // Force Hls.js for all m3u8 streams on desktop for consistent signed segment loading & CORS headers
      videoEl.removeAttribute('src');

      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        xhrSetup: (xhr, url) => {
          try {
            const parentUrl = new URL(src);
            const token = parentUrl.searchParams.get('token');
            const expires = parentUrl.searchParams.get('expires');
            if (token && expires && !url.includes('token=')) {
              const separator = url.includes('?') ? '&' : '?';
              const signedUrl = `${url}${separator}token=${encodeURIComponent(token)}&expires=${encodeURIComponent(expires)}`;
              xhr.open('GET', signedUrl, true);
            }
          } catch (e) {
            // Ignore URL parsing errors
          }
        },
      });
      hlsRef.current = hls;

      hls.loadSource(src);
      hls.attachMedia(videoEl);

      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        videoEl.muted = Boolean(muted);
        if (autoPlay) {
          videoEl.play().catch((err) => {
            console.warn('[VideoPlayer] HLS Autoplay deferred:', err.name, err.message);
          });
        }
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              console.warn('[VideoPlayer] Fatal HLS stream error:', data.details);
              setHasError(true);
              if (onErrorRef.current) onErrorRef.current(data);
              hls.destroy();
              break;
          }
        }
      });
    } else {
      // Direct MP4 or Native HLS (Safari fallback)
      videoEl.muted = Boolean(muted);
      videoEl.defaultMuted = true;
      videoEl.setAttribute('playsinline', 'true');
      videoEl.setAttribute('muted', '');
      
      if (videoEl.src !== src) {
        videoEl.src = src;
      }
      
      if (autoPlay) {
        const playPromise = videoEl.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            // Autoplay deferred or play called before media metadata loaded.
            // Do NOT trigger fallback image here; native onError event listener will handle real 404s.
            console.debug('[VideoPlayer] Autoplay deferred/pending:', err.name, err.message);
          });
        }
      }
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [src, autoPlay, muted]);

  if (hasError) {
    return <SafeImage src={poster} alt="Wallpaper Preview" className={className} fallbackIcon="🎥" />;
  }

  const isHlsUrl = typeof src === 'string' && src.includes('.m3u8');
  const videoSrcProp = isHlsUrl ? undefined : src;

  return (
    <video
      ref={videoRef}
      src={videoSrcProp}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      controls={controls}
      className={className}
      style={style}
      onEnded={onEnded}
      onError={(e) => {
        setHasError(true);
        if (onErrorRef.current) onErrorRef.current(e);
      }}
    />
  );
}
