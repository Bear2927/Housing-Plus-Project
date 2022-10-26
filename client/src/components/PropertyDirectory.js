import React, { useContext, useState } from "react";
import PropertyItem from "./PropertyItem";
import {PropertiesContext} from "../context/PropertiesProvider";


function PropertyDirectory ({handleRemoveProperty, handleWishListItem, wishList, reviews, setReviews, user}) {

    const [show, setShow] = useState(false)

    let {properties, setProperties} = useContext(PropertiesContext)

    function showAddReview() {
        setShow(!show)
    }
    

    return(
        <div>
            <h1 className="account1"> Properties </h1>
            
            <div className={show ? "image_grid2" : "image_grid1"}>
                {properties.map(property => (
                <PropertyItem 
                key={property.id} 
                property={property} 
                handleRemoveProperty={handleRemoveProperty}
                handleWishListItem={handleWishListItem}
                showAddReview={showAddReview}
                show={show}
                wishList={wishList}
                reviews={reviews}
                setReviews={setReviews}
                user={user}
                />))}
            </div>
        </div>
    )
}

export default PropertyDirectory;