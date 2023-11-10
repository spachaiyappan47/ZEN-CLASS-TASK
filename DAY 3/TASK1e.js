//Return all the palindromes in an array
let araay=["level","radar","wow"];
let palindromes =function (){
    let pali=[];
    for(let i=0;i<araay.length;i++){
      pali.push(araay[i].split('').reverse().join(''));
    }
    console.log(pali);
}
palindromes();

// IIFE function
let araay2=["amma","malayalam"];
(()=>{
    let pali=[];
    for(let i=0;i<araay2.length;i++){
      pali.push(araay2[i].split('').reverse().join(''));
   
}
console.log(pali);
})();