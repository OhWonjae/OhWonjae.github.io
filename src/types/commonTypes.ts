export interface projectTypes {
  title: string;
  url?: string;
  startPeriod: string;
  endPeriod: string;
  details: string[];
}

export interface CompanyTypes {
  companyName: string;
  companyIntroduction: string;
  startPeriod: string;
  endPeriod: string;
  projects: projectTypes[];
}

export interface ResumeTypes {
  profileImg: string;
  name: string;
  email: string;
  phone: string;
  github: string;
  blog: string;
  introduce: string;
  experience: CompanyTypes[];
  personalProjects: projectTypes[];
  etc: projectTypes[];
}
