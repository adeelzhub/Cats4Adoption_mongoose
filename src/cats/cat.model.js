const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema({
    breed: {
        type: String,
        unique: true,
        required: true
    },
    adoptionCost: {
        type: Number,
        required: true
    },
    numbers: {
        type: Number,
        required: true
    }
  
});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
