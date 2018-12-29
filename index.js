/*
 * Primary file for API
 */
require('dotenv').load();

// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const twilio = require('twilio');
const config = require('./config');
const tipCalculator = require('./tipCalculator');
const MessagingResponse = twilio.twiml.MessagingResponse;
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var client = new twilio(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);

//Outbound SMS Message with Node.js to specified Phone number from Twilio Phone number
client.messages
  .create({
    body: '\nHello Twilio tip calculator at your service!\n Please enter your bill amount:',
    from: config.MY_TWILIO_PHONE_NUMBER,
    to: config.MY_PHONE_NUMBER
  })
  .then(message => console.log(message.sid))
  .done();

// Start the server, and have it listen on port 3001
app.listen(port, () => console.log(`App listening on port ${port}!`));
