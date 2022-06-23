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
import { NavLink, Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

const active = {
  opacity: 1,
  backgroundColor: "grey",
  fontWeight: "bold",
  color: "white",
  border: "white 3px solid"
}


function NavItems({ currentUser, setCurrentUser }) {
  
  const handleSignInAlert = () => {
    alert("You must be logged in to access to this page! Redirecting to sign up")
  }

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
      .then(r => r.json())
      .then(setCurrentUser())
  }

  if (currentUser) {
    return (
      <>
        <Link to="/" exact class="nav-link">
          Home
        </Link>
        <Link to="/watches" exact class="nav-link">
          All Watches
        </Link>
        <Link to="/favorites" exact class="nav-link">
          {currentUser.name}' Favorites
        </Link>
        <Link to="/profile" exact class="nav-link">
          Profile
        </Link>
        <a onClick={handleLogout} class="nav-link">
          Logout
        </a>
      </>
    )
  }

  return (
    <>
      <Link to="/" exact class="nav-link">
        Home
      </Link>
      <Link to="/watches" exact class="nav-link">
        All Watches
      </Link>
      <Link to="/login" exact class="nav-link">
        Login
      </Link>
      <Link to="/signup" exact class="nav-link">
        Signup
      </Link>
    </>
  )
}

function NavBar({ currentUser, setCurrentUser }) {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse>
          <NavItems currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar




