import React from 'react'
import { useHistory } from 'react-router-dom';


function Landing() {
    let history = useHistory();

  return (

    <div>
      <h1> Let us help you choose your watches</h1>
     
      <button onClick={() => {history.push('/signup')}}>signup</button>
         <button onClick={() => {history.push('/login')}}>LOGIN</button>
    </div>
  )
}

export default Landing