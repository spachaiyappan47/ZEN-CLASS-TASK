//Sum of all numbers in an array
// Arrow function
let array=[10,20,30,40];
let sum=(argument)=>{
    let add=0;
    for(let value of array){
        add=add+value     
    }
    console.log(add);
}
sum(array);