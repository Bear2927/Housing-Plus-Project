import React, { useState, useEffect } from "react";
import PropertyItem from "./PropertyItem";


function PropertyDirectory ({properties, setProperties, handleWishListItem, wishList, reviews, setReviews, user, setOwners}) {

    const [show, setShow] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("/owners")
          .then((res) => res.json())
          .then((owners) => setOwners(owners));
      }, []);

      useEffect(() => {
        fetch("/reviews")
          .then((res) => res.json())
          .then((reviews) => setReviews(reviews));
      }, []);

      useEffect(() => {
        fetch("/properties")
          .then((res) => res.json())
          .then((properties) => setProperties(properties));
      }, []);

    let filteredProperties = properties.filter(property => {
      return property.address.toLowerCase().includes(searchTerm.toLowerCase())
    })

    function handleFilter(e) {
        setSearchTerm(e.target.value)
    }

    

    return(
        <div>
            <h1 className="account6">Search Properties</h1>
            <input className="form_input" type="text" placeholder="Search Property..." onChange={handleFilter}></input>
            <h1 className="account1"> Properties </h1>
            <div className={show ? "image_grid2" : "image_grid1"}>
                {filteredProperties.map(property => (
                <PropertyItem 
                key={property.id} 
                property={property} 
                properties={properties}
                setProperties={setProperties}
                handleWishListItem={handleWishListItem}
                show={show}
                setShow={setShow}
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