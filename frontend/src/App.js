import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link, 
  Switch
} from "react-router-dom";


import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import AddReview from "./components/add-review";
import MoviesList from "./components/movies-list";
import Movie from "./components/movie";
import Login from "./components/login";

import { version } from 'react';


function AppStart() 
{ return ( 
  <div className="App"> 
    Start Here   
  </div> 
  
  ); 
}




function App() {

  const [user, setUser] = React.useState(null)

  //-------------------------------- login (default user to null)
  async function login(user=null) {
    setUser(user)
  }

  //-------------------------------- logout
  async function logout() {
    setUser(null)
  }

  //-------------------------------- return
  //https://v5.reactrouter.com/web/guides/quick-start
  return (
    <div className="App">

      <Router>
        
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">PDF Review ver.{version}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Nav.Link>
              
              <Link to = {"/movies"}> Home  </Link>
            </Nav.Link>

            <Nav.Link> 
                {user? (
                    <a onClick={logout}> Logout User </a>
                ) : (
                    <Link to = {"/login"}>  Login  </Link>
                )}  
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <Switch>
          <Route exact path={["/", "/movies"]}
            component={MoviesList}>
          </Route>

          <Route path="/movies/:id/review" render={(props)=>
            <AddReview{...props} user={user} />
          }>            
          </Route>

          <Route path="/movies/:id" render={(props)=>
            <Movie{...props} user={user} />
          }>            
          </Route>

          <Route path="/login" render={(props)=>
            <Login{...props} login={login} />
          }>            
          </Route>

        </Switch>
        
      </Router>


    </div>
  );
}



function AppOld() {
  return (
    <div className="AppOld">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
