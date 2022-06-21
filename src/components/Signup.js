import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
 //import Error from "../styles/Error"  


function Signup({ setCurrentUser }) {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        age: 0,
        email: '',
        password: '',
    })

    const history = useHistory()
    const { name, age, email, password } = formData

    const handleChange = (e) => {
        const key = e.target.name

        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    const goBack = () => {
        history.push("/")
    }

   

    const createUser = (e) => {
        e.preventDefault()

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, body: JSON.stringify(formData)
        }
    
        fetch("/signup", configObj)
            .then(r => {
                if (r.ok) {
                    r.json().then(user => {
                        setCurrentUser(user)
                        history.push("/favorites")
                        /* window.location = '/favorites' */
                    })
                } else {
                    r.json().then(err => {
                        console.log(err.errors)
                        setErrors(err.errors)
                        alert(err.errors[0])
                    })
                }
            })
    }

    return (
        <div >
            
            <form onSubmit={createUser}>
                Name:
                <input onChange={handleChange} value={name} name="name" type="text" />
                Email:
                <input onChange={handleChange} value={email} name="email" type="email" />
                Password:
                <input onChange={handleChange} value={password} name="password" type="password" />
                <input type="submit" />
            </form>
            <button onClick={goBack}>Go Back</button>
        </div>
    )
}

export default Signup