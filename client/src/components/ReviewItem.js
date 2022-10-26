import React, { useState } from "react";
import Button from '@mui/material/Button';

function ReviewItem ({review, handleRemoveReview, updateReview}) {
    const [editReview, setEditReview] = useState(false)
    const [editedRating, setEditedRating] = useState(review.rating)
    const [editedReview, setEditedReview] = useState(review.review)

    function handleEdit () {
        setEditReview(!editReview)
    }

    function handleEditReview() {
        let newUpdatedReview = {
            rating: editedRating,
            review: editedReview
        }

        const configObj = {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUpdatedReview)
        }

        fetch(`/reviews/${review.id}`, configObj)
            .then(res => res.json())
            .then(review => updateReview(review))


    }

    function handleChangeRating(e) {
        setEditedRating(e.target.value)
    }

    function handleChangeReview(e) {
        setEditedReview(e.target.value)
    }

    function handleSubmitReview(e) {
        e.preventDefault()
        handleEditReview()
    }


    return(
        <div>
            <img className="item_image" src={review.property.image_url} alt={review.id} />
            <div className="item_div2">
                <h2>{review.property.address}</h2>
                {editReview ? 
                <div>
                <form onSubmit={(e) => handleSubmitReview(e)}>
                    <h5>Rating</h5>
                    <div><input className="form_input" onChange={handleChangeRating} value={editedRating} type="text" placeholder="rating..."/></div>
                    <h5>Review</h5>
                    <div><textarea className="textarea" rows="10" cols="50" onChange={handleChangeReview} value={editedReview} type="text" placeholder="review..."></textarea></div>
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
                </div>
                :
                <div>
                <h4>rating: {"⭐".repeat(review.rating)}/5</h4>
                <h4>{review.review}</h4>
                </div>
                }
                <Button variant="contained" onClick={() => handleRemoveReview(review)}>Delete</Button>
                <Button variant="contained" onClick={() => handleEdit()}>{editReview ? "Done" : "Edit"}</Button>
            </div>
        </div>
    )
}

export default ReviewItem;