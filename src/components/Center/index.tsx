import React, { ReactNode } from 'react';
import { StyledContainer } from './styles';

interface CenterProps {
  children: ReactNode;
}

const Center = ({ children }: CenterProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Center;
