import React from 'react';
import { render } from '@testing-library/react';
import Center from '..';

describe('Center', () => {
  it('should take a snapshot', () => {
    const Render = () => <Center>Text</Center>;
    const { asFragment } = render(<Render />);

    expect(asFragment()).toMatchSnapshot();
  });
});
