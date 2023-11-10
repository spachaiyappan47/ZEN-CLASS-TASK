//Convert all the strings to title caps in a string array
let fruit=['apple','banana','orange'];
let newarray = [];
let appercase=function(ar1,ar2){
  for(let i=0;i<fruit.length;i++) {
 newarray.push(((fruit[i].slice(0,1)).toUpperCase().concat(fruit[i].slice(1,fruit[i].length))));
  }
  console.log(newarray);
}
appercase(fruit,newarray);

//IIFE function
let array=[];
(()=>{
    for(let i=0;i<fruit.length;i++) {
     array.push(((fruit[i].slice(0,1)).toUpperCase().concat(fruit[i].slice(1,fruit[i].length))));
      }
      console.log(array);
    }

)();