import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import usePrevious from '../use-previous';

describe('usePrevious hook', () => {
  function MockComponent() {
    const [value, setValue] = useState(1);
    const previousValue = usePrevious(value);

    return (
      <>
        <p data-testid="previous-value">{previousValue}</p>
        <p data-testid="current-value">{value}</p>
        <button
          type="button"
          data-testid="add-button"
          aria-label="add-button"
          onClick={() => setValue(value + 1)}
        />
      </>
    );
  }

  it('should be able the usePrevious hook store previous value', () => {
    render(<MockComponent />);

    expect(screen.getByTestId('previous-value')).toBeEmptyDOMElement();
    expect(screen.getByTestId('current-value').textContent).toBe('1');

    const addButton = screen.getByTestId('add-button');

    fireEvent.click(addButton);

    expect(screen.getByTestId('previous-value').textContent).toBe('1');
    expect(screen.getByTestId('current-value').textContent).toBe('2');
  });
});
