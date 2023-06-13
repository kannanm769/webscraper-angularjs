const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();

// Endpoint for web scraping and saving the data to a file
app.get('/scrape', (req, res) => {
  axios.get('https://api.spacexdata.com/v4/launches/latest') // Replace with the URL you want to scrape
    .then(response => {
      const data = JSON.stringify(response.data); // Convert the data to a string

      // Save the data to a file
      fs.writeFile('output.json', data, err => {
        if (err) {
          console.error('Error saving data:', err);
          res.sendStatus(500);
        } else {
          console.log('Data saved successfully');
          res.sendStatus(200);
        }
      });
    })
    .catch(error => {
      console.error('Error scraping data:', error);
      res.sendStatus(500);
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
