import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Button, Row, Col } from 'react-bootstrap'

function Watches({ authorized }) {
  const [watches, setWatches] = useState([]);
  const [favorites, setFavorites] = useState([]);

  
  const getFavorites = () => {
    fetch("/my-favorites", {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log("favorites", json);
        setFavorites(json);
      });
  };

  useEffect(() => {
    const getWatches = () => {
      fetch("/all-watches", {
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setWatches(json);
        });
    };


    getWatches();
    getFavorites();
  }, []);

  function favorite(watch) {
    // console.log(watch)
    fetch("/save-favorite", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(watch),
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log("json", json);
        getFavorites()
      });
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
                <Button variant="primary" onClick={() => favorite(watch)}>
                  Add to favorite
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Watches;
