//Print the total population of countries using reduce function//
const XMLHttpRequest = require('xhr2');
let population = new XMLHttpRequest();
population.open('GET','https://restcountries.com/v3.1/all')
population.onload = function () {
    let countryData=JSON.parse(population.responseText);
    const people=countryData.reduce((preview,currunt)=>{
        return preview+currunt['population'];
    },0)
    console.log('Totalpopulation:',people);
    
};

population.send();

