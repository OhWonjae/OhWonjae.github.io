import React, { useContext } from 'react';
import { TitleWrapper } from '@/layout/wrapper/title-wrapper';
import './etc.scss';
import { ResumeContext } from '@/context/resumeContext';
import { ProjectInfo } from '@/components/projectInfo';
export const ETC = () => {
  const resumeData = useContext(ResumeContext);
  return (
    <TitleWrapper title={'기타'}>
      <div className={'etc'}>
        {resumeData?.etc?.map((project) => (
          <ProjectInfo key={project.title} data={project} />
        ))}
      </div>
    </TitleWrapper>
  );
};
