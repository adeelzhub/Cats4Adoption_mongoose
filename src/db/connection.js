const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () =>{
    try{
        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("\nsConnection to database established");
    }catch(error){
        console.log(error);
    }
}


connection();
