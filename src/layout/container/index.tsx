import React, { ReactNode } from 'react';
import './Container.scss';
interface ContainerProps {
  children?: ReactNode;
}
export const Container = ({ children }: ContainerProps) => {
  return <div className={'container'}>{children}</div>;
};
