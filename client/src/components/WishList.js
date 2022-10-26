import React from "react";
import PropertyItem from "./PropertyItem";

function WishList ({wishList, handleRemoveItem}) {

    let itemWish = wishList.map(item => <PropertyItem property={item} key={item.id} handleRemoveItem={handleRemoveItem}/>)
    // let geyserWish = wishList.map(item => <GeyserItem geyser={item} key={item.name}/>)

    return(
        <div>
            <h1 className="account1">Properties you are possibly looking to rent</h1>
            {console.log(wishList)}
            {(wishList.length === 0) ? (<div><img className="image_home" src="https://wompimages.azureedge.net/fetchimage?siteId=7736&url=https%3A%2F%2Fwww.realestateexpress.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fblog-image-real-estate-listing-descriptions.jpg" alt="placeholderImage"/></div>) : (
            <div className="image_grid2">
               {itemWish}
            </div>)}
        </div>
    )
}

export default WishList;