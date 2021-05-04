import React from 'react';
import { render } from '@testing-library/react';
import BookSearch from './BookSearch';

test('renders BookSearch', () => {
  const { getByPlaceholderText } = render(<BookSearch />);
  const linkElement = getByPlaceholderText("Search for books to add to your reading list and press Enter");
  expect(linkElement).toBeInTheDocument();
});
