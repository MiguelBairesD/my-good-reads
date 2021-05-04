import React from 'react'
import Book from "../book-search/bookListInterface";
import {useWishList} from "../book-search/BookSearch";

const AddToWishList = ({book}:{book:Book}) => {
    // useWishList is our custom hook to set the wishlist
    const {wishList,setWishList} = useWishList();

    const handleClick = () => {
        setWishList([...wishList,book]);
    }

    return(
        <button 
            disabled={typeof wishList.find(element => element.id == book.id) !== 'undefined'} 
            onClick={()=>handleClick()} >
            Add to wishlist
        </button>
    )
}

export default AddToWishList;