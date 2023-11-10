//Return all the prime numbers in an array
let naturalnumber=[2,3,9,10,11,13,15,81,27];
let value=false;
let array=[];
let primenumber=function(naturalnumber){
    
    for(let i=0;i<naturalnumber.length;i++){
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
      console.log(array);
    }
     
    

primenumber(naturalnumber);

// IFFE function
(()=>{
    for(let i=0;i<naturalnumber.length;i++){
        let j=2;
        
       for( j=2;j<=(naturalnumber[i]-1);j++){
           
          if(naturalnumber[i]%j==0  ){
                value=true;
                break;
                 }

          }
       if(j===naturalnumber[i]){
       console.log(naturalnumber[i]);
       }
  }
    
  })();
   

