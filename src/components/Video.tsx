import React from 'react';

const Video: React.FC<{ url: string; className?: string }> = ({
  url,
  className,
}) => (
  <div className={`ratio ratio-16x9 ${className}`}>
    <iframe
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default Video;
