/* import React from 'react'

function Navbar({ onLogout }) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

  return (
    <header>
    <button onClick={handleLogout}>Logout</button>
  </header>
  )
}

export default Navbar
 */

import React from 'react'
import { NavLink } from 'react-router-dom'

const active = {
  opacity: 1,
  backgroundColor: "grey",
  fontWeight: "bold",
  color: "white",
  border: "white 3px solid"
}


function NavBar({ currentUser, setCurrentUser }) {

  const handleSignInAlert = () => {
    alert("You must be logged in to access to this page! Redirecting to sign up")
  }

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
      .then(r => r.json())
      .then(setCurrentUser())
  }

  return (
    currentUser ?
      // NavBar for User that is logged in
      (
        <div className="nav__style">
          <NavLink
            className="nav__tab home__tab"
            exact to="/"
            activeStyle={active}
          >
            {currentUser.name}'s Home
          </NavLink>

          <NavLink

            className="nav__tab cards__tab"
            exact to="/watches"
            activeStyle={active}
          >
            All Watches
          </NavLink>
          
          <NavLink
            className="nav__tab "
            exact to="/favorites"
            activeStyle={active}
          >
            Favorite Watches
          </NavLink>
          <NavLink
            className="nav__tab profile__tab"
            exact to="/profile"
            activeStyle={active}
          >
            {currentUser.name}'s Profile
          </NavLink>
          <NavLink
            className="nav__tab logout__tab"
            exact to="/"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        </div>
      ) :
      (
        <div className="nav__style">
          <NavLink
            className="nav__tab home__tab"
            exact to="/"
            activeStyle={active}
          >
            Home
          </NavLink>
          <NavLink

            className="nav__tab cards__tab"
            exact to="/watches"
            activeStyle={active}
          >
            All Watches
          </NavLink>
          <NavLink
            className="nav__tab saved__tab"
            onClick={handleSignInAlert}
            exact to="/signup"
          >
            My Watches
          </NavLink>
          <NavLink
            className="nav__tab profile__tab"
            onClick={handleSignInAlert}
            exact to="/signup"
          >
            Details
          </NavLink>

        </div>
      )

  )
}

export default NavBar




