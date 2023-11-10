//Print odd numbers in an array
// Arrow functions
let array=[1,2,3,4,5,6];
let oddnumber= array =>{
     for(let i=0;i<array.length;i++){
        if (array[i]%2===1){
          console.log(array[i]);
        }
     }


}
oddnumber(array);