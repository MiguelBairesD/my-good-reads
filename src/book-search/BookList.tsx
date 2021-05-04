import React from 'react'
import Book from "./bookListInterface";
import AddToWishList from "../book-wishlist/AddToWishList";
import './BookList.scss';

const BookList = ({books}:{books:Book[]}) => {
    return(
        <section id="bookResults">
            {
                books.map((val,index) => {
                    return (
                        <article key={val.id} className="book">
                            <img className="thumbnail" src={val.volumeInfo.imageLinks?.thumbnail}/>
                            <h3 className="title">{val.volumeInfo.title}</h3>
                            <span className="authors">{val.volumeInfo.authors?.toString()}</span>
                            <span className="publisher">{val.volumeInfo.publisher}</span>
                            <p className="description">{val.volumeInfo.description}</p>
                            <AddToWishList book={val}/>
                        </article>
                    )
                })
            }
        </section>
    )
}

export default BookList;