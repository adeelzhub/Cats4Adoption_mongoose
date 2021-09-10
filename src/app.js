require("./db/connection");
const mongoose = require("mongoose");
const { mainModule } = require("process");
const{ listCat, findCat, addCat, updateCat, deleteCat} = require("./cats/cat.methods");
const command = process.argv[2];



const app = async () =>{
    if( command === "list"){
        await listCat();
    }else if(command === "find"){
        await findCat(process.argv[3]);
    }else if(command === "add"){
        const newCat = {
            breed: process.argv[3],
            adoptionCost: process.argv[4],
            numbers: process.argv[5]
        }
        await addCat(newCat);
    }else if(command === "update"){
        await updateCat(process.argv[3], (+process.argv[4]));
    }else if(command === "delete"){
        await deleteCat(process.argv[3]);
//     
    }else{
        console.log("Invalid command- see README file for details");
    }
    mongoose.disconnect();
    console.log("\nTerminating connection to the database...");
};


app();



