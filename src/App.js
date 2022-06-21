import React, { useState, useEffect } from 'react';
import {  BrowserRouter as Router, Switch, Route, Link }  from 'react-router-dom'
import Login from './components/Login';
import Watches from './components/Watches';
import LoginForm from './components/LoginForm';

import Signup from './components/Signup';
import Favorites from './components/Favorites';
import Landing from './components/Landing';
import Navbar from './components/Navbar'; 


function App() {
  const adminUser = {
    email: "test@test.com",
    password: "test123"
  }
  const [user, setUser] = useState({name:"", email: ""})
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

/*   if (user) {
     <h2>Welcome, {user.username}!</h2>;
  } else {
     <Login onLogin={setUser} />;
  }
}  */

  

  return (
    <div className="App">


      <Router>
        <Navbar currentUser={user} setCurrentUser={setUser} /> 
        <Switch>
          <Route path="/watches">
            <Watches />
          </Route>

          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/signup">
            <Signup setCurrentUser={setUser}/>
          </Route>

          <Route path="/favorites">
            <Favorites/>
          </Route>

          <Route path="/login">
            <LoginForm setCurrentUser={setUser} />
          </Route>



        </Switch>


      {/* <NavBar /> */}
      {/* {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}> Logout</button>
          </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )} */}
      </Router>
    </div>
    
  );
}

export default App;
