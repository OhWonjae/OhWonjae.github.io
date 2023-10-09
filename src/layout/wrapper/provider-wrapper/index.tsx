import React, { ReactNode, useState } from 'react';
import { ResumeTypes } from '@/types/commonTypes';
import { ResumeContext } from '@/context/resumeContext';
import ResumeData from '@/data/ResumeData.json';
interface providerWrapperProps {
  children?: ReactNode;
}
export const ProviderWrapper = ({ children }: providerWrapperProps) => {
  const [resumeData] = useState<ResumeTypes>(ResumeData);
  return (
    <ResumeContext.Provider value={resumeData}>
      {children}
    </ResumeContext.Provider>
  );
};
