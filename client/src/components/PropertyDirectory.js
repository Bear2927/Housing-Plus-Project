import React, { useContext} from "react";
import { Context } from "../App";
import PropertyItem from "./PropertyItem"

function PropertyDirectory ({ handleRemoveProperty, handleWishListItem, wishList, reviews, setReviews, user}) {

    const properties = useContext(Context)

    return(
        <div>
            <h1 className="account1"> Properties </h1>
            
            <div className="image_grid2">
                {properties.map(property => (
                <PropertyItem 
                key={property.id} 
                property={property} 
                handleRemoveProperty={handleRemoveProperty}
                handleWishListItem={handleWishListItem}
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