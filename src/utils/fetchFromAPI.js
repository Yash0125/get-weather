import axios from "axios";

const BASE_URL = 'https://weather-by-api-ninjas.p.rapidapi.com';

const options = {
  
  headers: {
    'X-RapidAPI-Key':"5fd34d5d5dmsh32a8b97e513de7dp19cf51jsn428df3a02184",
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
};

export const fetchFromAPI=async(city)=>{
    const {data}= await axios.get(`${BASE_URL}/v1/weather?city=${city}`,options)
    return data
}