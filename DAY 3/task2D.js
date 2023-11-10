// Return all the prime numbers in an array
// Arrow function
let naturalnumber=[0,1,3,9,10,11,13,15,81,27];
let value=false;
let array=[];
let primenumber=(naturalnumber)=>{
    
    
    for(let i=0;i<naturalnumber.length;i++){
     if (naturalnumber[i]<=1){
        console.log(naturalnumber[i],'is not prime number');
     }
          let j=2;
          
         for( j=2;j<=(naturalnumber[i]-1);j++){
             
            if(naturalnumber[i]%j==0  ){
                  value=true;
                  break;
                   }
  
            }
         if(j===naturalnumber[i]){
           array.push(naturalnumber[i]);
         }
    }
      console.log('prime number is:',array);
    }
     primenumber(naturalnumber);