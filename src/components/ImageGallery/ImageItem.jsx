import React from "react";

function ImageItem({ src, width, aspectRatio, className = "" }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt=""
      className={`object-contain shrink-0 self-stretch my-auto max-w-full aspect-[${aspectRatio}] w-[${width}] ${className}`}
    />
  );
}

export default ImageItem;