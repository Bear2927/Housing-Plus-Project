import React, { useState } from "react";

function PropertyItem ({property, handleRemoveProperty, handleWishListItem, wishList, handleRemoveItem, reviews, setReviews, user}) {

    const [formRating, setFormRating] = useState("")
    const [formReview, setFormReview] = useState("")

    function handleAddReview (){
        const newReview = {
          rating: formRating,
          review: formReview,
          property_id: property.id,
          user_id: user.id
        }

        const configObj = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newReview)
        }

        fetch("/reviews", configObj)
            .then(res => res.json())
            .then(review =>{
                setReviews([...reviews, review])

        
        setFormRating("")
        setFormReview("")

        })
    }

    function handleUpdateRating(e) {
        setFormRating(e.target.value)
    }

    function handleUpdateReview(e) {
        setFormReview(e.target.value)
    }

    function forceSubmit(e) {
        e.preventDefault()
        handleAddReview()
    }


    return(
        <div>
            <img className="item_image" src={property.image_url} alt={property.id} />
            <div className="item_div2">
                <h3>Address: {property.address}</h3>
                <h4>Beds: {property.bedrooms}</h4>
                <h4>Baths: {property.bathrooms}</h4>
                <h4>Price: ${property.price} a night</h4>
                {!wishList ? (
                    <div>
                    <button onClick={() => handleRemoveItem(property)}>Remove from Wish List</button>
                    <h4> Owner Name: {property.owners.map(owner => owner.name).join(", ")} </h4>
                    {property.owners.map(owner => <img key={owner.name} className="item_image3" src={owner.image_url} alt={owner.id}/>)}
                    <h4> Owner Email Address: {property.owners.map(owner => owner.email).join(", ")} </h4>
                    <h4> Owner Phone Number: {property.owners.map(owner => owner.phone_number).join(" | ")} </h4>
                </div>
                ) : (
                    <div>
                    <button onClick={() => handleWishListItem(property)}>Add to Wish List</button>
                    <button onClick={() => handleRemoveProperty(property)}>Delete</button>
                    <form onSubmit={forceSubmit}>
                        <h5 >Rating</h5>
                        <input onChange={handleUpdateRating} type="text" value={formRating} placeholder="rating..."/>
                        <h5 >Review</h5>
                        <textarea onChange={handleUpdateReview} type="text" rows="6" cols="40" value={formReview} placeholder="review..."></textarea>
                        <div><button className="form_button" type="submit">SUBMIT</button></div>
                    </form>
                    </div>
                )} 
                
                
            </div>
        </div>
    )
}

export default PropertyItem;