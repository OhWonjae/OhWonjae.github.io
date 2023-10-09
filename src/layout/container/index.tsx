import React, { ReactNode } from 'react';
import './container.scss';
interface ContainerProps {
  children?: ReactNode;
}
export const Container = ({ children }: ContainerProps) => {
  return <div className={'container'}>{children}</div>;
};
