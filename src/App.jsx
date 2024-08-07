// import logo from './logo.svg';
import "./App.css";
import img1 from "./image/search.jpg";
import img2 from "./image/3d-weather-cloud-with-rain-sun-rainy-day-icon-isolated-gray-background-3d-rendering-illustration-clipping-path_696265-2234.jpg";
import axios from "axios";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");

  const apiCall = async () => {
    const options = {
      method: "GET",
      url: "https://weather-api99.p.rapidapi.com/weather",
      params: { city: city },
      headers: {
        "x-rapidapi-key": "458757357cmshb913426114bdef1p1b7372jsn1511e1639a14",
        "x-rapidapi-host": "weather-api99.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setTemp(response.data.main.feels_like);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="main">
      <div className="card">
        <div class>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <div>
              <input
                placeholder="Search"
                className="search"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <button className="searchButton" onClick={apiCall}>
                <img style={{ width: "80%", height: "100%" }} src={img1}></img>
              </button>
            </div>
          </div>
          <br />
          <div className="weather">
            <img className="weatherImg" src={img2}></img>
            <h1 className="temp">{temp}°K</h1>
            <h2 className="city">{city}</h2>
          </div>
        </div>
        {/* <img  className="weather" src={img2}></img> */}
        {/* <div className="cardMain">cardMain</div> */}
      </div>
    </div>
  );
}

export default App;
