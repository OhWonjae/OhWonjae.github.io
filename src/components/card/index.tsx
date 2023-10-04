import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Image } from '../image';
import './Card.scss';
import { useGetComputedStyleWhenWindowReSize } from '@/hooks/useWindowSize';

export const Card = () => {
  const divRef = useRef(null);
  const [cardImageDivRef, setCardImageDivRef] = useState();
  const { style } = useGetComputedStyleWhenWindowReSize(
    cardImageDivRef || undefined,
  );
  const handleOnGetImageSize = (style: CSSStyleDeclaration | undefined) => {
    if (!style) return { img_w: 0, img_h: 0 };
    let w = 0;
    let h = 0;
    w = parseInt(style.width.replace('px', ''));
    h = parseInt(style.height.replace('px', ''));

    return { img_w: w, img_h: h };
  };
  const { img_w, img_h } = useMemo(() => {
    return handleOnGetImageSize(style);
  }, [style]);

  useEffect(() => {
    if (divRef?.current) {
      setCardImageDivRef(divRef?.current);
    }
  }, [divRef]);
  return (
    <div className={'card'}>
      <div ref={divRef} className={'card-image'}>
        <Image
          height={img_h}
          width={img_w}
          alt={'alt'}
          src={'public/assets/profile.png'}
        />
      </div>
      <div className={'card-detail'}>detaiil</div>
    </div>
  );
};
