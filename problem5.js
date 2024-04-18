function count(inventory,year){
const count = inventory.filter(car => car.car_year > year).length;
const arr = inventory.filter(car => car.car_year > year);
console.log(`Solution 5: Number of cars older than ${year} is ${count}`)
}
module.exports= count;