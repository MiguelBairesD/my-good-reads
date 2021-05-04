import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders My Good Reads as H1', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/My Good Reads/i);
  expect(linkElement.nodeName).toEqual("H1")
  expect(linkElement).toBeInTheDocument();
});
