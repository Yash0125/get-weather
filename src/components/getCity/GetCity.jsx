import React, { useState, useEffect } from "react";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { useNavigate } from "react-router-dom";
import "./getCity.css";

const GetCity = ({ data1 }) => {
  const [temp, setTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchFromAPI(data1).then((data) => setTemp(data.temp));
    fetchFromAPI(data1).then((data) => setFeelsLike(data.feels_like));
    fetchFromAPI(data1).then((data) => setHumidity(data.humidity));
  }, []);
  
  if (feelsLike == 0 && temp == 0) {
    return (
      <div className="container">
        <div className="getCity">
          <div className="getCity-title">
            <h1 className="getCity-icon" onClick={handleHomePage}>
              ←
            </h1>
            <h1 className="title">Weather App</h1>
          </div>
          <h3 className="getCity-error">
            It's possible that your location isn't available in our API or data.
            So you can return to the home page and manually type in the search
            bar to find weather for other well-known cities such as Mumbai
            ,Delhi etc. 
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="getCity">
          <div className="getCity-title">
            <h1 className="getCity-icon" onClick={handleHomePage}>
              ←
            </h1>
            <h1 className="title">Weather App</h1>
          </div>
          <img
            className="getCity-image"
            src="https://t2.gstatic.com/images?q=tbn:ANd9GcROJFh8Xxw7uu1SaSHhPNUpGNEftOwHT6IlU5MO4ORaXco5yyqf"
            alt="Weather Icon"
          />
          <h1 className="getCity-temp">{temp}°C</h1>
          <div className="getCity-title">
            <LocationOnIcon className="location-icon" />
            <p className="getCity-location">{data1}</p>
          </div>
          <div className="getCity-feelsLike">
            <ThermostatIcon className="location-icon" />
            <p className="getCity-location">{feelsLike}°C feelsLike</p>
          </div>

          <div className="getCity-humidity">
            <WaterDropIcon className="location-icon" />
            <p className="getCity-location">{humidity}% humidity</p>
          </div>
        </div>
      </div>
    );
  }
};
export default GetCity;
