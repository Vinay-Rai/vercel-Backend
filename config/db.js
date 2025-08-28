const mongoose = require("mongoose")

const connection = mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to database')
}).catch(err => console.error('MongoDB connection error:', err));

module.exports =  connection