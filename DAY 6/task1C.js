let XMLHttpRequest = require('xhr2');
let NCF = new XMLHttpRequest();
NCF.open('GET','https://restcountries.com/v3.1/all')

NCF.onload = function () {
    let users = JSON.parse(NCF.responseText);
    
     users.forEach(country => {
       console.log(country['name']);
       console.log(country['capital']);
        console.log(country['flag']);
     });
    
};



NCF.send();