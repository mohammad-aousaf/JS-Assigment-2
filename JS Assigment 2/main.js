




// Q1. Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.

    function sumofEvensNumbers (numStr)  {
          let sum = 0;
          for (let i = 0; i < numStr.length; i++) {
            if (numStr[i] % 2 === 0) {
            sum = sum + numStr[i];
            }
          }
          return sum;
    }


const numarray = [1,2,3,4,5,6,7,8,9,10];
console.log(sumofEvensNumbers(numarray));


console.log('-----------------------------------------------------------------------------------');
console.log('-------------------------------Question 1 ends-------------------------------------');
console.log('-----------------------------------------------------------------------------------');


// Q2. Write a function that takes a string as input and returns the number of vowels in the string.

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  const str = "Just Education";
  const numVowels = countVowels(str);
  console.log(numVowels);
  
console.log('-----------------------------------------------------------------------------------');
console.log('-------------------------------Question 2 ends-------------------------------------');
console.log('-----------------------------------------------------------------------------------');


// Q3. Write a function that takes an array of strings as input and returns the length of the longest string in the array.
     
    function longestlengthelement (array){
        let max = 0;
        for(let i=0; i<array.length; i++ ){
            if(array[i].length>max){
                max = array[i].length;
            }
        }
        return max;
    } 

    const array=["physics" ,"mechanics","quantum mechanics", "electricity and magnitisim"]
    const longestlength = longestlengthelement(array);
    console.log(longestlength);


console.log('-----------------------------------------------------------------------------------');
console.log('-------------------------------Question 3 ends-------------------------------------');
console.log('-----------------------------------------------------------------------------------');


// Q4. Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.

function findaveragenumbers (array){
    let average = 0;
    for (let i=0; i<array.length; i++){
        let currentNum = array[i]
        average += currentNum;
    }
    average = average / array.length;
    return average
}

const num = [2,4,6,7,8,99]
console.log(findaveragenumbers(num))

console.log('-----------------------------------------------------------------------------------');
console.log('-------------------------------Question 4 ends-------------------------------------');
console.log('-----------------------------------------------------------------------------------');


// q5. Write a function that takes an object as input and returns an array of all the keys in the object.



function keyelement(obj) {

  return Object.keys(obj);
}
  const obj = {
    name: "usman",
    age: 23,
    city: "Karachi",
  };
const getelement = keyelement(obj);
console.log(getelement);


console.log('-----------------------------------------------------------------------------------');
console.log('-------------------------------Question 5 ends-------------------------------------');
console.log('-----------------------------------------------------------------------------------');



// Q6. Write a function that takes an array of objects as input and returns an array of all the values
//  for a specified key in each object.

function ValuesofKeyobject(arr, key) {
  return arr.map(obj => obj[key]);
}
const objectvalues = [
  { name: 'Mohammad Aousaf ', age: 22 },
  { name: 'Mussaiad Ali', age: 23 },
  { name: 'S M Ather Ali', age: 21 }
];

const values = ValuesofKeyobject(objectvalues, 'name');
console.log(values);



console.log('-----------------------------------------------------------------------------------');
console.log('-------------------------------Question 6 ends-------------------------------------');
console.log('-----------------------------------------------------------------------------------');



// Q7. Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.


  function finduniquearray(arr2){
    return  [... new Set (arr)]
  }
  const arr =  ["apple", "mango", "banana", "apple", "mango", "pear", "pear", "orange", "mango"] ;
  const getarray = finduniquearray(arr)
    
  console.log(getarray)

  
console.log('-----------------------------------------------------------------------------------');
console.log('-------------------------------Question 7 ends-------------------------------------');
console.log('-----------------------------------------------------------------------------------');



  // Q8. Write a function that takes an array of numbers as input and returns the product of all the numbers in the array.


function product(arr3) {
  let num = 1;
  for (let i = 0; i < arr3.length; i++) {
    num = num * arr3[i];
  }
  return num;
}

let arr3 = [1, 2, 3, 4, 5];
const getproduct = product(arr3);
console.log(getproduct);

console.log('-----------------------------------------------------------------------------------');
console.log('-------------------------------Question 8 ends-------------------------------------');
console.log('-----------------------------------------------------------------------------------');
