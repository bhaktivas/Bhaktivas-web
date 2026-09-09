'use client';

import React, { useState } from 'react';

/**
 * Safe Image component with automatic 404 error logging & fallback placeholder rendering.
 */
export default function SafeImage({ src, alt, className = '', fallbackIcon = '🖼️' }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F5E8CE] to-[#E8DCC4] text-[#995512] p-4 text-center ${className}`}>
        <span className="text-3xl mb-1">{fallbackIcon}</span>
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-75">Bhaktivas Preview</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || 'Media'}
      className={className}
      onError={(e) => {
        console.warn(`[SafeImage 404 Log] Image failed to load from CDN: ${src}`);
        setError(true);
      }}
    />
  );
}
