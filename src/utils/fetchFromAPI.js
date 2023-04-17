import axios from "axios";

const BASE_URL = 'https://weather-by-api-ninjas.p.rapidapi.com';

const options = {
  
  headers: {
    'X-RapidAPI-Key':API_KEY,
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
};

export const fetchFromAPI=async(city)=>{
    const {data}= await axios.get(`${BASE_URL}/v1/weather?city=${city}`,options)
    return data
}
