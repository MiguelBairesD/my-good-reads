import React, { useContext, useEffect, useState } from "react";
import { getBooksByType } from "./book-search.service";
import BookList from "./BookList";
import Book from "./bookListInterface";
import WishList from "../book-wishlist/WishList";
import useDebounce from "../shared/UseDebounce";
import './BookSearch.scss';

export type WishListContextType = {
    wishList:Book[],
    setWishList:(Book:Book[])=>void
}
// this context is created to share the wishlist between childs
export const WishListContext = React.createContext<WishListContextType>({wishList:[],setWishList:(book)=>{}});
//custom hook to set the wishlist
export const useWishList = () => useContext(WishListContext);

const BookSearch = () => {
    const defaultAllAvailableBooks:Book[] = [];

    const [bookType, updateBookType] = useState("");
    const [bookTypeToSearch, updateBookTypeToSearch] = useState<string>("");
    const debouncedSearch = useDebounce(bookTypeToSearch);
    const [allAvailableBooks, setAllAvailableBooks] = useState(defaultAllAvailableBooks);
    const [wishList, setWishList] = useState(defaultAllAvailableBooks);

    async function requestBooks() {
        if (bookTypeToSearch) {
            const allBooks = await getBooksByType(bookTypeToSearch);
            setAllAvailableBooks(allBooks.items);
        }
    }

    useEffect(() => {
        async function getAllBooks() {
            await requestBooks();
        }
        getAllBooks();
    }, [debouncedSearch]);

    return (
            <>
                <WishListContext.Provider value={{ wishList, setWishList }}>
                <div className="book--container">
                    <section className="search-params">
                        <form onSubmit={(e)=>e.preventDefault()}>
                            <input
                                className="full-width"
                                autoFocus
                                name="gsearch"
                                type="search"
                                value={bookType}
                                placeholder="Search for books to add to your reading list and press Enter"
                                onChange={e => {
                                        updateBookType(e.target.value);
                                        updateBookTypeToSearch(e.target.value);
                                    }
                                }
                            />
                        </form>
                        {!bookType && (
                            <section className="empty">
                                <p>
                                    Try searching for a topic, for example
                                    <a onClick={() => {
                                            updateBookType("Javascript");
                                            updateBookTypeToSearch("Javascript");
                                        }}
                                    >
                                        {" "}
                                        "Javascript"
                                    </a>
                                </p>
                            </section>
                        )}
                        {bookType && (<BookList books={allAvailableBooks}/>)}
                    </section>
                    <WishList />
                </div>
                
                </WishListContext.Provider>
            </>
    );
};

export default BookSearch;
