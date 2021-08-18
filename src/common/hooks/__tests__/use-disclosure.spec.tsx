import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import useDisclosure from '../use-disclosure';

describe('useToggle hook', () => {
  // eslint-disable-next-line react/prop-types
  function MockComponent({ initialValueIsTrue = false }) {
    const { value, onToggle, setTrue, setFalse } = useDisclosure(initialValueIsTrue);

    const activeText = value ? 'true' : 'false';

    return (
      <>
        <p>Value: {activeText}</p>
        <button type="button" data-testid="toggle" aria-label="toggle" onClick={onToggle} />
        <button type="button" data-testid="forceTrue" aria-label="forceTrue" onClick={setTrue} />
        <button type="button" data-testid="forceFalse" aria-label="forceFalse" onClick={setFalse} />
      </>
    );
  }

  it('starts with an initial value', () => {
    const wrapperInitallyFalse = render(<MockComponent />);
    expect(wrapperInitallyFalse.getByText('Value: false')).toBeTruthy();

    const wrapperInitallyTrue = render(<MockComponent initialValueIsTrue />);
    expect(wrapperInitallyTrue.getByText('Value: true')).toBeTruthy();
  });

  it('toggles the value when the toggle callback is triggered', () => {
    const wrapper = render(<MockComponent />);
    expect(wrapper.getByText('Value: false')).toBeTruthy();

    const toggle = wrapper.getByTestId('toggle');

    fireEvent.click(toggle);
    expect(wrapper.getByText('Value: true')).toBeTruthy();

    fireEvent.click(toggle);
    expect(wrapper.getByText('Value: false')).toBeTruthy();
  });

  it('forces the value to true when the forceTrue callback is triggered', () => {
    const wrapper = render(<MockComponent />);
    expect(wrapper.getByText('Value: false')).toBeTruthy();

    const forceTrue = wrapper.getByTestId('forceTrue');

    fireEvent.click(forceTrue);
    expect(wrapper.getByText('Value: true')).toBeTruthy();

    fireEvent.click(forceTrue);
    expect(wrapper.getByText('Value: true')).toBeTruthy();
  });

  it('forces the value to false when the forceFalse callback is triggered', () => {
    const wrapper = render(<MockComponent initialValueIsTrue />);
    expect(wrapper.getByText('Value: true')).toBeTruthy();

    const forceFalse = wrapper.getByTestId('forceFalse');

    fireEvent.click(forceFalse);
    expect(wrapper.getByText('Value: false')).toBeTruthy();

    fireEvent.click(forceFalse);
    expect(wrapper.getByText('Value: false')).toBeTruthy();
  });
});
