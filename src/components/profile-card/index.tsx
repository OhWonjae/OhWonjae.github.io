import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import './card.scss';
import { CardDetail } from './card-detail';
import { ResumeContext } from '@/context/resumeContext';

export const ProfileCard = () => {
  const resumeData = useContext(ResumeContext);
  return (
    <div className={'card'}>
      <div className={'card-image'}>
        <img
          className={'profile-img'}
          src={resumeData?.profileImg || ''}
          alt={'alt'}
        />
      </div>
      <div className={'card-detail'}>
        <CardDetail />
      </div>
    </div>
  );
};
