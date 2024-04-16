function problem1(arr,value=33){
 let item=arr.find(item=>item.id===value)
 if(item){
    return console.log(`Car ${item.id} is a ${item.car_year} ${item.car_make} ${item.car_model}`)
 }
 else


 return console.log("Entry not found")
}
module.exports = problem1;