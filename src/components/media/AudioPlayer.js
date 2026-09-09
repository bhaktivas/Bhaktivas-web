'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Resilient Audio Player for pre-signed CDN audio streams.
 */
export default function AudioPlayer({
  src,
  autoPlay = false,
  controls = true,
  loop = false,
  className = '',
  style = {},
  onEnded,
  onError,
}) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl || !src) return;

    audioEl.src = src;
    audioEl.load();

    if (autoPlay) {
      audioEl.play().catch((err) => {
        console.warn('[AudioPlayer] Audio autoplay deferred:', err);
      });
    }
  }, [src, autoPlay]);

  return (
    <audio
      ref={audioRef}
      src={src}
      controls={controls}
      loop={loop}
      autoPlay={autoPlay}
      className={className}
      style={style}
      onEnded={onEnded}
      onError={onError}
    />
  );
}
