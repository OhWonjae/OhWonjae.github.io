import React, { ReactNode, Suspense } from 'react';
import { Image } from '../image';
import './Card.scss';

export const Card = () => {
  return (
    <div className={'card'}>
      <div className={'card-image'}>
        <Image
          height={350}
          width={350}
          alt={'alt'}
          src={'public/assets/profile.png'}
        />
      </div>
      <div className={'card-detail'}>detaiil</div>
    </div>
  );
};
