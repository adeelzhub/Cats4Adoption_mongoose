const Cat = require("./cat.model");


exports.listCat = async () =>{
try{
    let breed = 1;
    const catList = await Cat.find();
    // console.log(catList);
    catList.map(cat => console.log(`\n Cat breed No. ${breed++}\n ${cat.numbers} ${cat.breed} up for adoption, Adoption cost: £${cat.adoptionCost} each`));
    // console.log("\n End of the list");

}catch(error){
    console.log(error);
};
};
exports.findCat = async (catBreed) =>{
    try{
        const cat = await Cat.find({breed: catBreed});
        console.log(`${cat[0].numbers} ${cat[0].breed} up for adoption, Adoption cost: £${cat[0].adoptionCost} each`)
    
    }catch(error){
        console.log(error);
};
};
exports.addCat = async (newCat) =>{
    try{
        const cat = new Cat(newCat);
        await cat.save();
        console.log("Entry saved successfully");
    
    }catch(error){
        console.log(error);
};
};
exports.updateCat = async (catBreed, number) =>{
    try{
        let cat = await Cat.findOne({breed: catBreed});
        let newNumber = (cat.numbers) + (+number);
        await Cat.updateOne({breed: catBreed},{$set:{numbers: newNumber}});
        console.log("\nUpdate Successful");  
    }catch(error){
        console.log(error);
};
};
exports.deleteCat = async (catBreed) =>{
    try{
        await Cat.deleteOne({breed: catBreed});
        console.log("Deleted successfully");
    }catch(error){
        console.log(error);
};
};