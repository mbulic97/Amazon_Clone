const functions = require("firebase-functions");
const express = require("express");
const cors= require("cors");
const stripe = require("stripe")('sk_test_51QVKBKKgyXoRPHBYVVkIkgGxiR4pfSBuE0dpFEKCdiRJArrga535MG9bo8I1rhKq496ZTOTKC7bFv9xzK2ZkegR3008Q9e5JkG');

//App config
const app = express()

//middlewares

app.use(cors({origin:true}));
app.use(express.json());

// API Routes
app.get("/",(req,res)=> res.status(200).send("Hello World"));

app.post("/payments/create", async(req,res)=>{
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd" ,
    });
    // Ok - created
    res.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})

//example endpoint
//http://127.0.0.1:5001/clone-d979a/us-central1/api

// Listen command

exports.api= functions.https.onRequest(app);

