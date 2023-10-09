import React, { ReactNode } from 'react';
import './title-wrapper.scss';
interface titleWrapperProps {
  children?: ReactNode;
  title: string;
}
export const TitleWrapper = ({ children, title }: titleWrapperProps) => {
  return (
    <div className={'title-wrapper'}>
      <div className={'title'}>{title}</div>
      <div className={'content'}>{children}</div>
    </div>
  );
};
