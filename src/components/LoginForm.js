import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function LoginForm({ Login, error}) {

    let history = useHistory();

    const goBack = () => {
        history.push("/")
    }

    

    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        console.log('details', details, Login)
        /* console.log(details) */
        //Login(details);
        fetch('/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        }).then(res =>{
            return res.json()
        }).then(data => {
            console.log('data', data)
            window.location = '/watches'
        }).catch(err => {
            console.log('error', err)
        })
    }

  return (
    
        <header>
        <span> 
        <h1>Let Us Help You To Choose A Watch</h1>
        </span>
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            
            <h2>Login</h2>
            {(error !=="") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>
            <button type="submit">LOGIN</button>
            {/* <input type="submit" value="LOGIN" /> */}
            
        </div>
       
    </form>
    <button onClick={goBack}>Go Back</button>
    </header>
  )
}

export default LoginForm