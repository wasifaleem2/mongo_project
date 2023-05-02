const mongoose = require('mongoose')
const reserve = new mongoose.Schema({
    code: String,
    products: { type : Array , default : [] } ,
});
const Reservation = mongoose.model("Reservation", reserve);

module.exports = {
    Reservation,
};
