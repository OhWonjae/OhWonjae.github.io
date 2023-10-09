export interface projectTypes {
  title: string;
  startPeriod: string;
  endPeriod: string;
  detail: string[];
}

export interface ExperienceTypes {
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
  experience: ExperienceTypes;
}
