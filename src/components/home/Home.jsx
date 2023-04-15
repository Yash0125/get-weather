import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./home.css";

const Home = ({ onData }) => {
  const [city, setCity] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("getCity");
    const data1 = city;
    onData(data1);
  };
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data.city.replace("__console_feed_remaining__0", ""));
            setCity(data.city.replace("__console_feed_remaining__0", ""));
          })
          .catch((error) => {
            console.error(error.message);
          });
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    handleSubmit();
  };

  // eslint-disable-next-line 
  const { data } = useParams();
  return (
  <div className="container">
    <div className="home">
    <div className="home-input">
    <h1 className="title">weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={city}
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
          className="home-input-search"
        />
      </form>
      <p className="home-option">------------------or------------------</p>
      <button className="home-button" onClick={getLocation}>Get Device Location</button>
      </div>
    </div>
    </div>
    
  );
};

export default Home;
