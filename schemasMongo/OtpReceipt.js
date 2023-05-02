var mongoose = require("mongoose");
const otpSchema = new mongoose.Schema({id: String, phoneNo: String, amount: String, initiateTime: String, isPending:Boolean });
const otpModel = mongoose.model("otpdata", otpSchema);

module.exports = otpModel;