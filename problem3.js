function sortCarModel(inventory) {
    let sortedModels = inventory.map(car => car.car_model).sort();
    console.log(`Solution 3:${JSON.stringify(sortedModels)}`)
}
module.exports=sortCarModel;