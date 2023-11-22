let XMLHttpRequest = require('xhr2');
let less = new XMLHttpRequest();
less.open('GET','https://restcountries.com/v3.1/all',);

less.onload = function () {
    let data = JSON.parse(less.responseText);
    
    let lessthen=data.filter((value)=>value['population']<200000);

    
    console.log(lessthen);
     
     } ;
  


less.send();