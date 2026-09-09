'use client';

import React from 'react';
import VideoPlayer from './VideoPlayer';
import AudioPlayer from './AudioPlayer';

/**
 * Unified Media Player component that inspects content payload or props
 * and renders VideoPlayer, AudioPlayer, or Image accordingly.
 */
export default function MediaPlayer({
  content,
  src,
  poster,
  type,
  className = '',
  style = {},
}) {
  const mediaUrl =
    src ||
    content?.videoUrl ||
    content?.hlsUrl ||
    content?.audioUrl ||
    content?.mediaUrl ||
    content?.imageUrl ||
    content?.artworkUrl ||
    content?.image;

  const isVideo =
    type === 'video' ||
    Boolean(content?.videoUrl || content?.hlsUrl) ||
    (typeof mediaUrl === 'string' && (mediaUrl.includes('.mp4') || mediaUrl.includes('.m3u8')));

  const isAudio =
    type === 'audio' ||
    Boolean(content?.audioUrl) ||
    (typeof mediaUrl === 'string' && (mediaUrl.includes('.mp3') || mediaUrl.includes('.m4a') || mediaUrl.includes('.wav')));

  if (isVideo) {
    return (
      <VideoPlayer
        src={mediaUrl}
        poster={poster || content?.imageUrl || content?.artworkUrl || content?.image}
        className={className}
        style={style}
      />
    );
  }

  if (isAudio) {
    return (
      <div className={`media-audio-wrapper ${className}`} style={style}>
        {(content?.imageUrl || content?.artworkUrl || content?.image) && (
          <img
            src={content.imageUrl || content.artworkUrl || content.image}
            alt={content.title || 'Audio Cover'}
            className="media-audio-cover mb-4 rounded-xl shadow-md max-w-sm w-full object-cover"
          />
        )}
        <AudioPlayer src={mediaUrl} className="w-full" />
      </div>
    );
  }

  // Default Image rendering
  return (
    <img
      src={mediaUrl}
      alt={content?.title || 'Media Content'}
      className={className}
      style={style}
    />
  );
}

export { VideoPlayer, AudioPlayer };
