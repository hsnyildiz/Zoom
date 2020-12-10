const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    ZOOM_API_KEY: process.env.ZoomAPIKey,
    ZOOM_API_SECRET: process.env.ZoomAPISecret,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    VERIFICATION_TOKEN: process.env.VerificationToken
};