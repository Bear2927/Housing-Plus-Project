import React, { useState, useEffect } from "react";
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
import './fonts/Techno.ttf';

// export const Context = createContext()

function App() {
  const [properties, setProperties] = useState([]);
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
            {(user) ? 
            <Home 
            properties={properties}
            setProperties={setProperties}/>
            :
            <Signup 
            setUser={setUser} 
            user={user}
            />
            }
          </Route>
          <Route path="/properties">
            <PropertyDirectory 
            properties={properties}
            setProperties={setProperties}
            handleWishListItem={handleWishListItem}
            wishList={wishList}
            owners={owners}
            setOwners={setOwners}
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
            setReviews={setReviews}
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
          <Route path="*">
            <h1>404 Page not found</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
