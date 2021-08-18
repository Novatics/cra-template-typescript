import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 60px;
  background-color: ${props => props.theme.colors.bg.dark};
`;
