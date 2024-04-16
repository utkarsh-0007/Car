function getCarYears(inventory) { 
    let carYear= inventory.map(car => car.car_year); 
console.log(`Solution 4:${JSON.stringify(carYear)}`);
}
  module.exports=getCarYears;