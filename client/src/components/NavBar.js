import React from "react";
import {Link, useHistory} from "react-router-dom";


function NavBar({user, setUser}) {


  let history = useHistory()

  function handleLogout() {
    fetch("/logout", {method: "DELETE"});
    setUser(null);
    history.push("/Signup");
  }
    
    return( 
        <header className="navbar">
        {(!user) ? 
        <div>  
        <nav className="account2">
          <ul className="account2">
            <Link to="/signup" className="account2"> Signup </Link>
          </ul>
        </nav>
        </div>
         :  
        <div>
            <nav>
              <ul className="account2">
                <Link to="/" className="account2"> Home </Link>  |   
                {(user.admin) ? <Link to="/form" className="account2"> Add Property </Link> : null}  |  
                <Link to="/properties"  className="account2"> Properties </Link>  |
                <Link to="/wish" className="account2"> Wish List </Link>  |
                <Link to="/reviews" className="account2"> Reviews </Link> 
              </ul>
              <div>
                <button onClick={() => handleLogout()}> Logout </button>
              </div> 
            </nav>
        </div>
        }
      </header>
      )
}

export default NavBar;