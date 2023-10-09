import React, { useContext } from 'react';
import { TitleWrapper } from '@/layout/wrapper/title-wrapper';
import './personal-projects.scss';
import { ResumeContext } from '@/context/resumeContext';
import { ProjectInfo } from '@/components/projectInfo';
export const PersonalProjects = () => {
  const resumeData = useContext(ResumeContext);
  return (
    <TitleWrapper title={'개인 프로젝트'}>
      <div className={'personal-projects'}>
        {resumeData?.personalProjects?.map((project) => (
          <ProjectInfo key={project.title} data={project} />
        ))}
      </div>
    </TitleWrapper>
  );
};
