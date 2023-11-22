let XMLHttpRequest = require('xhr2');
let task = new XMLHttpRequest();
task.open('GET','https://restcountries.com/v3.1/all',);

task.onload = function () {
    let users = JSON.parse(task.responseText);
    
    let asian=users.filter((element)=>{ 
        element.region==='Asia';
        return element['name'];
       });
    
    console.log(asian);
     
     } ;
  


task.send();