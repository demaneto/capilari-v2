import React from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}) => {
  const basePath = "/images";
  const imageName = src.split("/").pop()?.split(".")[0];
  const webpSrc = `${basePath}/${src.replace(/\.[^/.]+$/, "")}.webp`;
  const fallbackSrc = `${basePath}/${src}`;

  return (
    <picture>
      <source
        srcSet={webpSrc}
        type="image/webp"
      />
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
};

export default OptimizedImage; 