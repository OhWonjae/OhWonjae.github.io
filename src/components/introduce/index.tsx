import React, { useContext } from 'react';
import { TitleWrapper } from '@/layout/wrapper/title-wrapper';
import './introduce.scss';
import { ResumeContext } from '@/context/resumeContext';
export const Introduce = () => {
  const resumeData = useContext(ResumeContext);
  return (
    <TitleWrapper title={'자기소개'}>
      <div className={'introduce'}>{resumeData?.introduce || ''}</div>
    </TitleWrapper>
  );
};
