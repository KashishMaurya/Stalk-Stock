const { Schema } = require('mongoose');

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

module.exports = { HoldingsSchema };




// const mongoose = require("mongoose");

// Define the schema correctly
// const HoldingSchema = new mongoose.Schema({
//   name: String,
//   qty: Number,
//   avg: Number,
//   price: Number,
//   net: String,
//   day: String,
// });

// Export the schema properly without destructuring
// module.exports = HoldingSchema;
