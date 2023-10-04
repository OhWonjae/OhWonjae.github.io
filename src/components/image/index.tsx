import React, { SyntheticEvent, useState, Suspense, useEffect } from 'react';
import './Image.scss';
interface ImageTypes {
  height: number;
  width: number;
  src: string;
  alt: string;
}
export const Image = ({ height, width, alt, src }: ImageTypes) => {
  const [isLoading, setIsLoading] = useState(true);
  const [h, setH] = useState(height);
  const [w, setW] = useState(width);
  const [originW, setOriginW] = useState(width);
  const [originH, setOriginH] = useState(height);
  const onLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    const element = e.currentTarget;
    calcSize(element.naturalHeight, element.naturalWidth);
  };
  const calcSize = (naturalHeight: number, naturalWidth: number) => {
    setOriginW(naturalWidth);
    setOriginH(naturalHeight);
    if (naturalHeight >= naturalWidth) {
      const nw = (height * naturalWidth) / naturalHeight;
      const nh = height;
      setW(Math.floor(nw));
      setH(Math.floor(nh));
    } else {
      const nw = width;
      const nh = (width * naturalHeight) / naturalWidth;
      setW(Math.floor(nw));
      setH(Math.floor(nh));
    }
    setIsLoading(false);
  };
  useEffect(() => {
    setH(height);
    setW(width);
    if (originH && originW) {
      calcSize(originH, originW);
    }
  }, [height, width, originW, originH]);

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
