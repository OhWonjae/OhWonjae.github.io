import React from 'react';
import { TitleWrapper } from '../title-wrapper';
import './introduce.scss';
import ResumeData from '@/data/ResumeData.json';
export const Experience = () => {
  return (
    <TitleWrapper title={'경력'}>
      <div className={'experience'}>{ResumeData.experience}</div>
    </TitleWrapper>
  );
};
