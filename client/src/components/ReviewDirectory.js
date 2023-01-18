import React, {useEffect} from "react";
import ReviewItem from "./ReviewItem"

function ReviewDirectory ({reviews, handleRemoveReview, updateReview, setReviews}) {

    useEffect(() => {
        fetch("/reviews")
          .then((res) => res.json())
          .then((reviews) => setReviews(reviews));
      }, []);

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