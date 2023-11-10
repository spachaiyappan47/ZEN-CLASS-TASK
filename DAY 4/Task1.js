
let data='{"name":"Arun kumar","age":25,"job":"Trainee","salary":20000,"Qualification":"diplamo","hobbies":["cricket","fishing","bike ride"]}'
let info=(JSON.parse(data));


//   *  for loop *  //
 for (let i=0;i<Object.keys(info).length;i++){
    console.log(Object.keys(info)[i],':',Object.values(info)[i]);
 }


// * for in loop * //
 for (let index in info){
    console.log(index,':',info[index]);
 }

// for of loop  //

 for (let value of Object.keys(info)){
    console.log(value,':',info[value]);
 }


//  forEach *** 1 method
Object.entries(info).forEach(biodata => {
    console.log(biodata[0],':',biodata[1]);
    
});
// forEach*** 2 method
Object.keys(info).forEach(elament=>{
 console.log(elament,':',info[elament]);
});
// ForEach***3 method
Object.values(info).forEach(elament=>{
    console.log(((Object.keys(info))[Object.values(info).indexOf(elament)]),':',elament);
});