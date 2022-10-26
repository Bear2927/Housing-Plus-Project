import React, { useState, useEffect, useContext } from "react";
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import PropertyDirectory from "./components/PropertyDirectory";
import PropertyForm from "./components/PropertyForm";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import WishList from "./components/WishList";
import ReviewDirectory from "./components/ReviewDirectory";
import { PropertiesProvider } from "./context/PropertiesProvider";
import {PropertiesContext} from "./context/PropertiesProvider";
import './fonts/Techno.ttf';

// export const Context = createContext()

function App() {
  let {properties, setProperties} = useContext(PropertiesContext)
   const [owners, setOwners] = useState([]);
   const [listings, setListings] = useState([]);
   const [wishList, setWishList] = useState([]);
   const [reviews, setReviews] = useState([]);
   const [user, setUser] = useState(null)

   
  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

   
  
  

  useEffect(() => {
    fetch("/owners")
      .then((res) => res.json())
      .then((owners) => setOwners(owners));
  }, [user]);

  useEffect(() => {
    fetch("/listings")
      .then((res) => res.json())
      .then((listings) => setListings(listings));
  }, [user]);

  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((reviews) => setReviews(reviews));
  }, [user]);

  
  function handleRemoveProperty(property){

    fetch(`/properties/${property.id}`, {method: "DELETE"})
    
    let newProperties = properties.filter(p => p.id !== property.id)
    setProperties(newProperties)

  }

  function handleRemoveReview(review){

    fetch(`/reviews/${review.id}`, {method: "DELETE"})
    
    let newReviews = reviews.filter(r => r.id !== review.id)
    setReviews(newReviews)

  }

  function updateReview(updatedReview) {
    const newReviewsArray = reviews.map((review => review.id === updatedReview.id ? updatedReview : review))
    setReviews(newReviewsArray)

  }
  
  function handleRemoveItem(item) {
    let newWishList = wishList.filter(i => i.id !== item.id)
    setWishList(newWishList)
    console.log("heyyy")
  }

  function handleWishListItem(favoriteItem) {
    setWishList([...wishList, favoriteItem])
  }

  return (
    
    <BrowserRouter>
      <div className="App">
      <NavBar user={user} setUser={setUser}/>
        <Switch>
          <Route exact path="/">
            <Home user={user}/>
          </Route>
          <Route path="/properties">
            <PropertyDirectory 
            properties={properties}
            handleRemoveProperty={handleRemoveProperty}
            handleWishListItem={handleWishListItem}
            wishList={wishList}
            setProperties={setProperties}
            owners={owners}
            reviews={reviews}
            setReviews={setReviews}
            user={user}
            />
          </Route>
          <Route path="/wish">
            <WishList 
            wishList={wishList}
            handleRemoveItem={handleRemoveItem}
            />
          </Route>
          <Route path="/reviews">
            <ReviewDirectory 
            reviews={reviews}
            handleRemoveReview={handleRemoveReview}
            updateReview={updateReview}
            />
          </Route>
          <Route path="/form">
            <PropertyForm 
            properties={properties}
            setProperties={setProperties}
            owners={owners}
            setOwners={setOwners}
            listings={listings}
            setListings={setListings}
            />
          </Route>
          <Route path="/login">
            <Login 
            setUser={setUser} 
            user={user}
            />
          </Route>
          <Route path="/signup">
            <Signup 
            setUser={setUser} 
            user={user}
            />
          </Route>
          <Route path="*">
            <h1>404 Page not found</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
