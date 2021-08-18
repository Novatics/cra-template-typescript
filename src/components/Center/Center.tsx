import React, { ReactNode } from 'react';

interface CenterProps {
  children: ReactNode;
}

const Center = ({ children }: CenterProps) => {
  return <div>{children}</div>;
};

export default Center;
