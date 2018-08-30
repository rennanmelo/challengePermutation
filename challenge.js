// Check if two strings are permutation of each other. The strings never be empty and are english words in lowercase.

let string1 = "testing",
    string2 = "ingestt",
    array1 = string1.split(''),
    array2 = string2.split(''),
    cont = 0;

function Permutation() {
  array1.sort();
  array2.sort();
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i] || array1.length !== array2.length){
      console.log("Não é permutação");
      break;
    }else{
      cont++
      if(cont == array1.length){
        console.log("Permutação")
      }
    }   
  }
}
Permutation()