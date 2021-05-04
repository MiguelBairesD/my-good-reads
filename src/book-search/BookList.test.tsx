import React from 'react';
import { render } from '@testing-library/react';
import BookList from './BookList';
import Book from "./bookListInterface";

test('renders BookList', () => {
    const books:Book[] = [];
    const result = render(<BookList books={books}/>);
    const linkElement = result.container.querySelector("#bookResults");
    expect(linkElement?.nodeName).toEqual("SECTION");
    expect(linkElement).toBeInTheDocument();
});


test('renders BookList', () => {
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
    const result = render(<BookList books={books}/>);
    const bookTitleElement = result.getByText(books[0].volumeInfo.title);
    expect(bookTitleElement).toBeInTheDocument();
    
    const bookAuthorsElement = result.getByText(books[0].volumeInfo.authors.toString())
    expect(bookAuthorsElement).toBeInTheDocument();

    const bookPublisherElement = result.getByText(books[0].volumeInfo.publisher)
    expect(bookPublisherElement).toBeInTheDocument();

    const bookDescElement = result.getByText(books[0].volumeInfo.description)
    expect(bookDescElement).toBeInTheDocument();
});
