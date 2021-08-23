import React, { ReactNode } from 'react';
import { StyledContainer } from './styles';

interface CenterProps {
  children: ReactNode;
}

const Center: React.FC<CenterProps> = ({ children }: CenterProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Center;
