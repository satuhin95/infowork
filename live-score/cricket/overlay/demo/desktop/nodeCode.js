const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://cricket-live-data.p.rapidapi.com/match/2432999',
  headers: {
    'X-RapidAPI-Key': '7c3e44048bmshf4d04d3c4715fedp14eeb6jsn5a5c180a5734',
    'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});