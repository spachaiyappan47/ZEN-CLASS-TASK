//Sum of all numbers in an array
let array=[2,4,6,8];
let sum=function(sam){
    let add=0;
    for(let value of array){
        add=add+value     
    }
    console.log(add);
}
sum(array);
//iife function
(()=>{

    let sumvalue=0;
    for(let value of array){
        sumvalue=sumvalue+value     
    }
    console.log(sumvalue);
    
})();