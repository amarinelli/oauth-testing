// Import modules
const express = require('express');
const request = require('request');

// Load environment variables
require('dotenv').config()
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// Instantiates Express
var app = express();
