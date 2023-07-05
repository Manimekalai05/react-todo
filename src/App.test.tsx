import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Button with text "Submit"', () => {
test('should render correctly', () => {
  render(<App />);
  const submitButton = screen.getByText('Submit');
  expect(submitButton).toBeInTheDocument();
  expect(submitButton.tagName).toBe('BUTTON');
  expect(submitButton).toBeInstanceOf(HTMLButtonElement);
});
});
