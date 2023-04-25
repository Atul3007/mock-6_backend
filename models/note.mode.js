const mongoose=require("mongoose");
const notesschema=mongoose.Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: String,
    arrivalTime: String,
    seats: Number,
    price: Number
})
const notesmodel=mongoose.model("note",notesschema);
module.exports={
    notesmodel
}