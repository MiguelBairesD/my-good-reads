import React from 'react';
import { render } from '@testing-library/react';
import WishList from './WishList';
import BookList from "../book-search/BookList";
import Book from "../book-search/bookListInterface";

test('renders empty WishList', () => {
    const books:Book[] = [];
    const result = render(<WishList />);
    const linkElement = result.getByText("My reading whishlist (0)");
    expect(linkElement?.nodeName).toEqual("H2");
    expect(linkElement).toBeInTheDocument();
});

test('renders WishList with 1 book', () => {
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
    const BookListResult = render(<BookList books={books}/>);
    const WishListResult = render(<WishList />);
    const linkElement = WishListResult.getByText("My reading whishlist (0)");
    expect(linkElement).toBeInTheDocument();
});