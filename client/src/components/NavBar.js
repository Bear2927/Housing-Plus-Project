import React from "react";
import {Link, useHistory} from "react-router-dom";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


function NavBar({user, setUser}) {


  let history = useHistory()

  function handleLogout() {
    fetch("/logout", {method: "DELETE"});
    setUser(null);
    history.push("/login");
  }
    
    return( 
        <header>
        {(!user) ? 
        <AppBar>  
        <nav>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
              justifyContent="center"
              padding="15px"
            >
            {/* <Link to="/signup"><Button variant="contained"> Signup </Button></Link> */}
          </Stack>
        </nav>
        </AppBar>
         :  
        <AppBar>
            <nav>
              <Stack 
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={4}
                justifyContent="left"
                padding="10px"
              >
                <Link to="/" className="account2"><Button variant="contained"> Home </Button></Link>    
                {(user.admin) ? <Link to="/form" className="account2"><Button variant="contained"> Add Property </Button></Link> : null}   
                <Link to="/properties"  className="account2"><Button variant="contained"> Properties </Button></Link>  
                <Link to="/wish" className="account2"><Button variant="contained"> Wish List </Button></Link>  
                <Link to="/reviews" className="account2"><Button variant="contained"> Reviews </Button></Link> 
              </Stack>
              <div></div>
            </nav>
            <nav>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={4}
                justifyContent="right"
                padding="10px"
                marginTop={-7}
              >
                <Button variant="contained" onClick={() => handleLogout()}> Logout </Button>
              </Stack> 
            </nav>
        </AppBar>
        }
      </header>
      )
}

export default NavBar;