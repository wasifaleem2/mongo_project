var mongoose = require("mongoose");
const saleSchema = new mongoose.Schema({id: String, SuccessfulId: { type : Array , "default" : [] }, unSuccessFullId: { type : Array , "default" : [] }, transTime: String,couponCode:String, saleId:String, isPending:Boolean });
const SaleRecipt = mongoose.model("salerecipts", saleSchema);

module.exports = SaleRecipt;
