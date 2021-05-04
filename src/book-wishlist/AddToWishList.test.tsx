import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import AddToWishList from './AddToWishList';
import Book from "../book-search/bookListInterface";

test('renders add to wishlist button', () => {
    const books:Book[] = [
        {
            id: '1',
            volumeInfo: {
                title: 'Book title',
                authors: ['Author 1', 'Author 2'],
                publisher: 'publisher',
                publishedDate: '',
                description: 'description',
            }
        }
    ];
    const result = render(<AddToWishList book={books[0]}/>);
    const linkElement = result.getByText("Add to wishlist");
    userEvent.click(linkElement);
    expect(linkElement).toBeInTheDocument();
});