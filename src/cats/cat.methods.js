const Cat = require("./cat.model");


exports.listCat = async () =>{
try{
    const catList = await Cat.find();
    console.log(catList);
    console.log("\n End of the list")

}catch(error){
    console.log(error)
};
};
exports.findCat = async (catBreed) =>{
    try{
        const cat = await Cat.find({breed: catBreed})
        console.log(cat)
    
    }catch(error){
        console.log(error)
};
};
exports.addCat = async (newCat) =>{
    try{
        const cat = new Cat(newCat);
        await cat.save();
        console.log("Entery saved successfully")
    
    }catch(error){
        console.log(error)
};
};
exports.updateCat = async (catBreed, number) =>{
    try{
        let cat = await Cat.findOne({breed: catBreed});
        let newNumber = (cat.numbers) + (+number)
        await Cat.updateOne({breed: catBreed},{$set:{numbers: newNumber}})
        console.log("Update Successful")  
    }catch(error){
        console.log(error)
};
};
exports.deleteCat = async (catBreed) =>{
    try{
        await Cat.deleteOne({breed: catBreed})
        console.log("Movie deleted successfully")
    }catch(error){
        console.log(error)
};
};