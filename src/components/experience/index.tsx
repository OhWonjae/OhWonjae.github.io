import React, { useContext } from 'react';
import { TitleWrapper } from '@/layout/wrapper/title-wrapper';
import './experience.scss';
import { ResumeContext } from '@/context/resumeContext';
import { CompanyInfo } from '@/components/experience/companyInfo';
import { ProjectInfo } from '@/components/projectInfo';
export const Experience = () => {
  const resumeData = useContext(ResumeContext);
  return (
    <TitleWrapper title={'경력'}>
      {resumeData?.experience.map((companyData) => (
        <React.Fragment key={companyData.companyName}>
          <CompanyInfo data={companyData} />
          {companyData.projects.map((project) => (
            <ProjectInfo key={project.title} data={project} />
          ))}
        </React.Fragment>
      ))}
    </TitleWrapper>
  );
};
