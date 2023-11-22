let XMLHttpRequest = require('xhr2');
let task = new XMLHttpRequest();
task.open('GET','https://restcountries.com/v3.1/all',);

task.onload = function () {
    let users = JSON.parse(task.responseText);
    const CountryName = users
    .filter((doller) => doller?.currencies?.USD?.name === "United States dollar")
    .map((Cname) => Cname.name);
  console.log(CountryName);
    
      } ;
  


task.send();