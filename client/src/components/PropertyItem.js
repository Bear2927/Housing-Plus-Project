import React, { useState } from "react";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function PropertyItem ({property, properties, setProperties, handleWishListItem, wishList, handleRemoveItem, reviews, setReviews, user, show, setShow}) {

    
    const [formRating, setFormRating] = useState("")
    const [formReview, setFormReview] = useState("")
    const [showOne, setShowOne] = useState(false)

    

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

    function showAddReview() {
        setShow(!showOne)
        setShowOne(!show)
    }

    function handleRemoveProperty(property){

        fetch(`/properties/${property.id}`, {method: "DELETE"})
        
        let newProperties = properties.filter(p => p.id !== property.id)
        setProperties(newProperties)
    
    }

    return(
        <div>
            <img className="item_image" src={property.image_url} alt={property.id} />
            <div className="item_div2">
                <h3>Address: {property.address}</h3>
                <h4>Beds: {property.bedrooms} bd</h4>
                <h4>Baths: {property.bathrooms} ba</h4>
                <h4>Price: ${property.price} a night</h4>
                {!wishList ? (
                    <div>
                    <Button variant="contained" onClick={() => handleRemoveItem(property)}>Remove from Wish List</Button>
                    <h4> Owner Name: {property.owners.map(owner => owner.name).join(", ")} </h4>
                    <Stack direction="row" spacing={2} justifyContent="center">{property.owners.map(owner => <Avatar className="item_image4" key={owner.name} src={owner.image_url} alt={owner.id} sx={{ width: 100, height: 100 }}/>)}</Stack>
                    <h4> Owner Email Address: {property.owners.map(owner => owner.email).join(", ")} </h4>
                    <h4> Owner Phone Number: {property.owners.map(owner => owner.phone_number).join(" | ")} </h4>
                </div>
                ) : (
                    <div>
                    <Stack direction="row" spacing={1} justifyContent="center">
                        <Button variant="contained" onClick={() => handleWishListItem(property)}>Add to Wish List</Button>
                        <Button variant="contained" onClick={() => handleRemoveProperty(property)}>Delete</Button>
                        <Button variant="contained" onClick={() => showAddReview()}>{showOne ? "Done" : "Add a Review"}</Button>
                    </Stack>
                    {showOne ? <form onSubmit={forceSubmit}>
                        <h5 >Rating</h5>
                        <input className="form_input" onChange={handleUpdateRating} type="text" value={formRating} placeholder="Rate this property..."/>
                        <h5 >Review</h5>
                        <textarea className="textarea" onChange={handleUpdateReview} type="text" rows="6" cols="40" value={formReview} placeholder="Write a review..."></textarea>
                        <div><Button variant="contained" className="form_button" type="submit">SUBMIT</Button></div>
                    </form> : null}
                    </div>
                )} 
                
                
            </div>
        </div>
    )
}

export default PropertyItem;