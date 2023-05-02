var http = require("http");
var mongoose = require("mongoose");
const uuidV4 = require("uuid").v4;
var emailModel = require('./schemasMongo/EmailReceipt');
var otpModel = require('./schemasMongo/OtpReceipt');
var SaleRecipt = require('./schemasMongo/SaleReceipt');
var {Reservation} = require('./schemasMongo/Reservation')
var UserModel = require('./schemasMongo/UserModel')
var LocationModel = require('./schemasMongo/LocationModel')
//Creating a database named "db":
var url = "mongodb://localhost:27017/db?appname=MongoDB%20Compass&ssl=false";
mongoose.set("strictQuery", false);
mongoose.connect(url, {    
	useNewUrlParser: true,
})

// //emailData
// var edata = new emailModel({id: uuidV4(), email: "a@gmail.com", saleReciptId: "1234", isPending: "true" });
// edata.save(function (err, emailData) {
//   if (err){ return console.error(err);}
//   else{console.log(emailData.email, "saved");}
// });
// //otpData
// var odata = new otpModel({id: uuidV4(), phoneNo: "+92131415235", amount: "10", initiateTime:Date(), isPending: "true" });
// odata.save(function (err, otpData) {
//   if (err){ return console.error(err);}
//   else{console.log(otpData.phoneNo, "saved");}
// });

// let idss = [
//     { _id: '35', _name: "Blackened Chicken Bowl", _amount:"9.35", _category:"Salads and Bowls", _categoryId:"5", _stock:"1"},
//     { _id: '35', _name: "Blackened Chicken Bowl", _amount:"9.35", _category:"Salads and Bowls", _categoryId:"5", _stock:"1"},
//     { _id: '35', _name: "Blackened Chicken Bowl", _amount:"9.35", _category:"Salads and Bowls", _categoryId:"5", _stock:"1"}
// ]
// //saleData
// var sdata = new SaleRecipt({id: uuidV4(),  SuccessfulId: idss, unSuccessFullId: idss, transTime: Date(), couponCode:"H1L0D6", saleId:"String", isPending: "true" });
// sdata.save(function (err, saleData) {
//   if (err){ return console.error(err);}
//   else{console.log(saleData.id, "saved");}
// });

// let sale = emailModel.findOne({})
// console.log("Saleeee-------:", sale);

// otpModel.deleteMany({});
// console.log("delete")
let res = new Reservation({
  code:"abcd", 
  products:[ "32", "42", "20"]
})
res.save();
// otpModel.findOneAndDelete({},{"sort": { "_id": -1 }})

// let otp = otpModel.findOne({phoneNo:"c"})
async function go(){
  let key = await otpModel.findOne().exec();
  let z =key.id 
  console.log("----",z)
}
go();


// otpModel.find({}).deleteOne().exec();  
// console.log("removed")
// otpModel.findOneAndDelete({},{"sort": { "_id": -1 }})


//create schema
// const schema = new mongoose.Schema({ name: String, nationality: String });
// const usersModel = mongoose.model('users', schema);

//find data
// usersModel.find({name: "Ali"}, (err, userData)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data",userData)
//     }
// })

//update with findOneAndUpdate and with updateOne updateMany
// usersModel.findOneAndUpdate({nationality: "German"}, {nationality: "Pakistani"}, (err, result)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("result",result)
//     }
// })

// save model to database
// var p = new usersModel({ name: 'Kohli', nationality: "Indian"});
// p.save(function (err, newPerson) {
//   if (err){ return console.error(err);}
//   else{console.log(newPerson.name, "saved");}
// });

// let peoples = [{ name: 'messi', nationality: "Argentina"},{ name: 'Ronaldo', nationality: "Portgal"}]
// usersModel.collection.insertMany(peoples);

// delete data
// usersModel.find({ name:"Bilal" }).remove().exec();

// populate (populating location model with user model)
LocationModel.find({})
  .populate({path:'userId', select: 'name'})
  .exec()
  .then(userLoc => {
    console.log('Loc with user details:', userLoc);
  })
  .catch(err => {
    console.error(err);
  });


//create server
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Server started");
}).listen(8081);
console.log("Server running at http://127.0.0.1:8081/");



