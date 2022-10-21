import React from "react";
import ReviewItem from "./ReviewItem"

function ReviewDirectory ({reviews, handleRemoveReview, updateReview}) {

    return(
        <div>
            <h1 className="account1"> Reviews </h1>
            <div className="image_grid">
                {reviews.map(review => (
                <ReviewItem 
                key={review.id} 
                review={review}
                handleRemoveReview={handleRemoveReview} 
                updateReview={updateReview}
                />))}
            </div>
        </div>
    )
}

export default ReviewDirectory;