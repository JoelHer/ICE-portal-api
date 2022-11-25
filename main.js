const express = require("express");
const axios = require('axios');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get("/index.js", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.js'));
});

app.get("/api/getTripInfo", (req, res) => {
    axios
  .get("https://iceportal.de/api1/rs/tripInfo/trip")
  .then(function (response) {
    if (response.status == 200) {
        console.log("Data successfully fetched from \"https://iceportal.de/api1/rs/tripInfo/trip\"")
        res.send(response.data)
    } else {
        console.log("Error while getting data from \"https://iceportal.de/api1/rs/tripInfo/trip\"")
        res.statusCode(500)
    }
  });
});

app.get("/api/getStatus", (req, res) => {
    axios
  .get("https://iceportal.de/api1/rs/status")
  .then(function (response) {
    if (response.status == 200) {
        console.log("Data successfully fetched from \"https://iceportal.de/api1/rs/status\"")
        res.send(response.data)
    } else {
        console.log("Error while getting data from \"https://iceportal.de/api1/rs/status\"")
        res.statusCode(500)
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Axios GET Default
