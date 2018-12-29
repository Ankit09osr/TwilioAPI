require('dotenv').load();

// Export config
module.exports = {
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_API_KEY,
  MY_PHONE_NUMBER: "+Your Phone Number",
  MY_TWILIO_PHONE_NUMBER: "+Your Twilio Phone Number",
};