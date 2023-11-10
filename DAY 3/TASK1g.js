//Remove duplicates from an array
let array=[2,3,5,7,8,2,8,3];
let removeduplicate= function(array){
    let result=[];
     for (let i=0;i<array.length;i++){
       if (result.indexOf(array[i])==-1){
        result.push(array[i]);
      }

 
    }
    console.log(result);
}
removeduplicate(array);

// IIFE function
(()=>{
  let result=[];
     for (let i=0;i<array.length;i++){
       if (result.indexOf(array[i])==-1){
        result.push(array[i]);
      }

 
    }
    console.log(result);
})();