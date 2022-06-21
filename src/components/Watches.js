import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

function Watches({ authorized }) {
  const [watches, setWatches] = useState([])
const testPost = () => {
  fetch('/home', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name: 'Test1'})
  }) 


}



  return (
 /* <div className="grid">  */
    <div>
      <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title>Watches</Card.Title>
    <Card.Text>
      Here will go the data from the watch API
    </Card.Text>
    <button onClick={testPost}>Add to Favorites</button>
  </Card.Body>
</Card>

      
    </div>
  )
}

export default Watches