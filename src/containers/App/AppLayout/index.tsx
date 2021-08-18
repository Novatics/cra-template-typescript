import React from 'react';
import AppHeader from '../AppHeader';

export interface AppLayoutProps {
  children: JSX.Element;
}

const AppLayout: React.FC<AppLayoutProps> = (props: AppLayoutProps) => {
  return (
    <>
      <AppHeader />
      {props.children}
    </>
  );
};

export default AppLayout;
