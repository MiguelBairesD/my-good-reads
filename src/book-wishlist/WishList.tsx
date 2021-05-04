import React from 'react';
import { useWishList } from "../book-search/BookSearch";
import './WishList.scss';

const WishList = () => {
    const {wishList,setWishList} = useWishList();

    const removeFromWishList = (index:number) => {
        // removing book from wishList
        wishList.splice(index,1)
        // setting the wishlist again
        setWishList([...wishList])
    }

    return(
        <aside className="reading-list-container">
            <h2>My reading whishlist ({wishList.length})</h2>
            {
                wishList.map((val,index)=>{
                    return (
                        <p 
                            key={val.id}>
                            {val.volumeInfo.title} 
                            <span 
                                className="clickable" 
                                onClick={()=>removeFromWishList(index)}>
                                {" "}x
                            </span>
                        </p>
                    )
                })
                
            }
        </aside>
    )
}

export default WishList;