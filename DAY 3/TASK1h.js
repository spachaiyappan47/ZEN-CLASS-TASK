//Rotate an array by k times
let array=[1,2,3,4,5];
let k=parseInt[userinput] // k is user input;
let Rotate = function(){
    for(let i=1;i==k;i++){
        array.push(array[0]);
        array.shift(array[0])
    }
    console.log(array);
}
Rotate();

// IIFE function
 
 (()=>{
    for(let i=1;i==k;i++){
        array.push(array[0]);
        array.shift(array[0])
    }
    console.log(array);

 })();