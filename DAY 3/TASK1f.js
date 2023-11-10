//Return median of two sorted arrays of the same size.
// Anonymous function
 
let math1=[1,2,3,4,5];
let math2=[6,7,12,9,10];
let median =function(){
   let newarray=math1.concat(math2);
   
   let n=(newarray.length)/2;
   console.log((newarray[n]+newarray[n+1])/2);
    
   }
   


median();

// IIF function
(()=>{
    let newarray=math1.concat(math2);
   
   let n=(newarray.length)/2;
   console.log((newarray[n]+newarray[n+1])/2);

})();