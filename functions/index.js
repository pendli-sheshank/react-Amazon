const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
  'sk_test_51JrR4rSHuknOLiRCTR2oCt9rZNwvpet5YUIUBUSOrUF5y8lKbkqnOLRm30iawoAKxFKOu9HBF2v3CE0TA0PwkHAU00UGvPIAOH'
);

// API

// App Config

const app = express();

// Middle Ware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment Request Received for this amount', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'INR',
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/colne-c5ba5/us-central1/api
