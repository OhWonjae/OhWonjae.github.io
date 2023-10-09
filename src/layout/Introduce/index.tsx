import React from 'react';
import { TitleWrapper } from '../wrapper/title-wrapper';
import './introduce.scss';
import ResumeData from '@/data/ResumeData.json';
export const Introduce = () => {
  return (
    <TitleWrapper title={'자기소개'}>
      <div className={'introduce'}>{ResumeData.introduce}</div>
    </TitleWrapper>
  );
};
