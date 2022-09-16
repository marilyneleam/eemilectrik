import React from 'react';
import { render, screen } from '@testing-library/react';
import Production from './Production';

test('renders learn react link', () => {
  render(<Production />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
