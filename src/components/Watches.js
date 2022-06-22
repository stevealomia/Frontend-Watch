import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

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
    <div className="grid">
      {watches.map((watch) => {
        /* const isFavorite = favorites.find(fav => fav.watch_id === watch.id) */
        return (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={watch.image_url} />
              <Card.Body>
                <Card.Title>{watch.title}</Card.Title>
                <Card.Text>{watch.watchName}</Card.Text>
                <button onClick={() => favorite(watch)}>
                  Add to favorite
                </button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Watches;
