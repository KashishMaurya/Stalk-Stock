const { model } = require("mongoose");

//import
const { PositionsSchema } = require("../schemas/PositionsSchema");

//create model based on schema
const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };
