var mongoose = require("mongoose");
const emailSchema = new mongoose.Schema({id: String, email: String, saleReciptId: String, isPending: Boolean });
const emailModel = mongoose.model("emailData", emailSchema);

module.exports = emailModel;