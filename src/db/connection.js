const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () =>{
    try{
        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("\nConnection to the database established");
    }catch(error){
        console.log(error);
    }
}


connection();
