import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

function Favorites({ authorized }) {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const getWatches = () => {
      fetch("/my-favorites", {
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log('json', json)
          const favorited = json.filter(watch => watch.details).map(watch => JSON.parse(watch.details))
          setWatches(favorited);
        });
    };

    getWatches();
  }, []);

  function favorite(watch) {
    fetch('/save-favorite', { 
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(watch)
    }).then(res => {
      return res.json()
    }).then(json => {
      const newWatches = watches.filter(w => {
        return watch.id !== w.id
      })
      setWatches(newWatches)
      console.log('json', json)
    })
  }

  console.log("watches", watches);
  return (
    <div className="grid">
      {watches.map((watch) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={watch.image_url} />
            <Card.Body>
              <Card.Title>{watch.title}</Card.Title>
              <Card.Text>{watch.watchName}</Card.Text>
              <button onClick={() => favorite(watch)}>Remove from favorite</button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
