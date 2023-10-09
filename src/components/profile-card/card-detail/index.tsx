import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import './card-detail.scss';
import ResumeData from '@/data/ResumeData.json';
import { ResumeContext } from '@/context/resumeContext';

export const CardDetail = () => {
  const resumeData = useContext(ResumeContext);
  return (
    <div>
      <div className={'card-detail-name'}>{resumeData?.name || ''}</div>
      <div className={'card-detail-info'}>
        <img src={'public/assets/icons/phone-call.png'} />
        <span>{resumeData?.phone || ''}</span>
      </div>
      <div className={'card-detail-info'}>
        <img src={'public/assets/icons/email.png'} />
        <span>{resumeData?.email || ''}</span>
      </div>
      <div className={'card-detail-info'}>
        <img src={'public/assets/icons/github.png'} />
        <span>
          <a href={resumeData?.github || ''} target="_blank" rel="noreferrer">
            {resumeData?.github || ''}
          </a>
        </span>
      </div>
      <div className={'card-detail-info'}>
        <img src={'public/assets/icons/blogger.png'} />
        <span>
          <a href={resumeData?.blog || ''} target="_blank" rel="noreferrer">
            {resumeData?.blog || ''}
          </a>
        </span>
      </div>
    </div>
  );
};
