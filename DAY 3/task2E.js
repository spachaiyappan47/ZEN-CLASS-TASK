//Return all the palindromes in an array
// Arrow function
let array=["level","radar","wow"];
let palindromes = (arg)=>{
    let PalinDromes=[];
    for(let i=0;i<array.length;i++){
      PalinDromes.push(array[i].split('').reverse().join(''));
    }
    console.log(PalinDromes);
}
palindromes(array);