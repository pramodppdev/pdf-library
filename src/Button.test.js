import React from 'react';  // Import React to use JSX
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button renders with label', () => {
  const { getByText } = render(<Button label="Click Me" />);
  expect(getByText('Click Me')).toBeInTheDocument();
});

test('Button calls onClick when clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button label="Click Me" onClick={handleClick} />);
  fireEvent.click(getByText('Click Me'));
  expect(handleClick).toHaveBeenCalled();
});
