// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
var Firebase = require("firebase");
var stripe = require("stripe")("sk_test_K9690kBVsB1rreyld35xMH7e");

// (Assuming you're using express - expressjs.com)
// Get the credit card details submitted by the form
var stripeToken = request.body.stripeToken;

var charge = stripe.charges.create({
  amount: 100, // amount in cents, again
  currency: "usd",
  source: stripeToken,
  description: "Example charge"
}, function(err, charge) {
  	if (err && err.type === 'StripeCardError') {
    // The card has been declined
  }
});