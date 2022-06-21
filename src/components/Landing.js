import React from 'react'
import { useHistory } from 'react-router-dom';


function Landing() {
    let history = useHistory();

  return (

    <div>
        <button onClick={() => {history.push('/signup')}}>signup</button>
         <button onClick={() => {history.push('/login')}}>LOGIN</button>
    </div>
  )
}

export default Landing