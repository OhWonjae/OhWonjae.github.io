import React, { ReactNode, SyntheticEvent, useState, Suspense } from 'react';
import './Image.scss';
interface ImageTypes {
  height: number;
  width: number;
  src: string;
  alt: string;
}
export const Image = ({ height, width, alt, src }: ImageTypes) => {
  트;
  // loading
  const [isLoading, setIsLoading] = useState(true);
  const [h, setH] = useState(height);
  const [w, setW] = useState(width);
  const onLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    const element = e.currentTarget;
    if (element.naturalHeight >= element.naturalWidth) {
      const nw = (height * element.naturalWidth) / element.naturalHeight;
      const nh = height;
      setW(Math.floor(nw));
      setH(Math.floor(nh));
    } else {
      const nw = width;
      const nh = (width * element.naturalHeight) / element.naturalWidth;
      setW(Math.floor(nw));
      setH(Math.floor(nh));
    }
    setIsLoading(false);
  };

  return (
    <>
      <img
        src={src}
        style={{ width: w, height: h, opacity: isLoading ? 0 : 1 }}
        onLoad={onLoad}
        alt={alt}
      />
    </>
  );
};
