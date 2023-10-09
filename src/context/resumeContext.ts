import { createContext } from 'react';
import { ResumeTypes } from '@/types/commonTypes';

export const ResumeContext = createContext<ResumeTypes | null>(null);
