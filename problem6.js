function bmwAndAudi(inventory) {
    let bmwAudi= inventory.filter(car => car.car_make === 'BMW' || car.car_make === 'Audi');
    console.log(JSON.stringify(bmwAudi));  
}
module.exports= bmwAndAudi;