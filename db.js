const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://yashsumukh11:yashsumukh11@cluster0.ntr01lr.mongodb.net/db' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose