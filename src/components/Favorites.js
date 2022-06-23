import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Col, Row, Button} from 'react-bootstrap'

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
          setWatches(json);
        });
    };

    getWatches();
  }, []);

  function removeFromFavorites(watch) {
    fetch(`/remove-favorite/${watch.id}`, { 
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
      body: JSON.stringify(watch)
    }).then(res => {
      return res.json()
    }).then(json => {
      const newWatches = watches.filter(w => {
        return watch.id !== w.id
      })
      setWatches(newWatches)
    })
  }
 



  console.log("watches", watches);
  return (
    <Row className="g-4">
      {watches.map((watch) => {
        /* const isFavorite = favorites.find(fav => fav.watch_id === watch.id) */
        return (
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src={watch.image_url} />
              <Card.Body>
                <Card.Title>{watch.title}</Card.Title>
                <Card.Text style={{ minHeight: 60}}>{watch.watchName}</Card.Text>
                <Button variant="danger" onClick={() => removeFromFavorites(watch)}>
                  Remove from favorite
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Favorites;
