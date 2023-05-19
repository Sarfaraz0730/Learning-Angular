let express = require("express");
let cors = require("cors")

let mongoose = require("mongoose")

let app = express()

let url = "mongodb+srv://admin:admin@cluster0.jyqe6pd.mongodb.net/?retryWrites=true&w=majority"

let Schema = mongoose.Schema;
let ObjectId =Schema.ObjectId;

let User = mongoose.model("User", new Schema({
    id:ObjectId,
    title:String,
    firstName:String,
    lastName:String,
    city:String

}))

mongoose.connect(url).then(res=>console.log("DB connected")).catch(err=>console.log("Error"))
app.listen(5050,()=>{
    console.log(`Litening on port 5050`)
})