let para = document.querySelector('.para')
let mov1 = document.querySelector('.mov-1')
let mov2 = document.querySelector('.mov-2')
let mov3 = document.querySelector('.mov-3')
let mov4 = document.querySelector('.mov-4')
let mov5 = document.querySelector('.mov-5')
let name1 = document.querySelector('.std-name-1');
let name2 = document.querySelector('.std-name-2');
let name3 = document.querySelector('.std-name-3');
let score1 = document.querySelector('.std-score-1')
let score2 = document.querySelector('.std-score-2')
let score3 = document.querySelector('.std-score-3')
let sco1 = document.querySelector('.sc-1')
let sco2 = document.querySelector('.sc-2')
let sco3 = document.querySelector('.sc-3')
let sco4 = document.querySelector('.sc-4')
let sco5 = document.querySelector('.sc-5')
let sco6 = document.querySelector('.sc-6')
let sco7 = document.querySelector('.sc-7')
let sco8 = document.querySelector('.sc-8')
let sco9 = document.querySelector('.sc-9')
let sco10 = document.querySelector('.sc-10')



// QUESTION NO 1 :
// 1. Declare an empty array using JS literal notation to store
// student names in future.

// SOLUTION :

// let newArr = [];


// QUESTION NO 2 :

// 2. Declare an empty array using JS object notation to store
// student names in future.

// SOLUTION :

// let newArr = [];



// QUESTION NO 3 :
// 3. Declare and initialize a strings array.

// SOLUTION :

// const arr = 'Muhammad Arsalan';
// const newArr = arr.split(' ');
// console.log(newArr)



// QUESTION NO 4 :

// 4. Declare and initialize a numbers array.

// SOLUTION :

// let numArr = ['1','2','3','4','5']
// console.log(numArr);
// console.log(numArr.length);



// QUESTION NO 5 :
// . Declare and initialize a boolean array.
// SOLUTION :

// let booleanArr = ['true', 'false']
// console.log(booleanArr);
//  let cArr= booleanArr.join(' ')
// console.log(cArr);

// QUESTION NO 6 :

// 6. Declare and initialize a mixed array.

// SOLUTION :

// let mixArr = ['Apple', 'Carrot', 'Arsalan',20]
// console.log(mixArr);
// console.log(typeof(mixArr));

// QUESTION NO 7 :

// 7. Declare and Initialize an array and store available mobile
// networks in Pakistan.

// SOLUTION :

// let netArr = ['Zong','Telenore','Jazz','Warid']
// console.log(netArr);


// QUESTION NO 8 :
// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser

// SOLUTION :

// let availDegree = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS','M. Phil', 'PhD']
// console.log(availDegree);

// para.innerHTML =`<h1>Qualification</h1> <br><b> 1) SSC <br> 2) HSC <br> 3) BSC <br>4) BS <br> 5) BCOM<br> 6) MS<br> 7) M.Phil<br> 8) Phd </b>`;


// QUESTION NO 9 :

// . Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)

// SOLUTION :
// function getMovie() {
//    let movies = [mov1.value,mov2.value ,mov3.value,mov4.value,mov5.value];
//    console.log(movies);
//   console.log(mov1.value,mov2.value,mov3.value,mov4.value , mov5.value);
//   para.innerHTML = `<h1>Top Movie of 2015 :</h1><b>1) ${mov1.value} <br> 2) ${mov2.value} <br> 3) ${mov3.value}<br> 4) ${mov4.value} <br> 5) ${mov5.value}<br> <h2>Length of Array is :</h2> ${movies.length} </br> `

// }


// QUESTION NO 10 :

// 10. Declare and Initialize an array with your favorite cars. Show 
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array

// SOLUTION :

// let favCar = ['Audi','Vezzel','Picanto','Lamborghini']

// para.innerHTML=`<h1>Favourite Cars</h1> ${favCar} <br> First index of the array :  ${favCar.indexOf('Audi')} <br>Car at first index : Audi<br> Last index of the array :${favCar.indexOf('Lamborghini')}<br> Car at last index of the array: Lamborghini`;




// QUESTION NO 11 :

// 11. Write a program to store 3 student names in an array. Take 
// another array to store score of these three students. Assume 
// that total marks are 500 for each student, display the scores & 
// percentages of students like:

// SOLUTION :


// function getResult(){

//     let nameInfo = [name1.value , name2.value ,name3.value];
//     let scoreInfo = [score1.value , score2.value ,score3.value];
//     console.log((nameInfo));
//     console.log((scoreInfo));
//    let totalMarks = 500;
//     let obtainedMarks1 = score1.value;  
//     let obtainedMarks2 = score2.value;  
//     let obtainedMarks3 = score3.value;  
//      let percentage1 = score1.value / totalMarks * 100;
//      let percentage2 = score2.value / totalMarks * 100;
//      let percentage3 = score3.value / totalMarks * 100;

//     para.innerHTML = `Score of ${name1.value} is ${score1.value}. Percentage : ${percentage1} % <br> <br> Score of ${name2.value} is ${score2.value}.Percentage : ${percentage2} % <br> <br>  Score of ${name3.value} is ${score3.value}. Percentage : ${percentage3} %` 
//     name1.value = ""
//     name2.value = ""
//     name3.value = ""
//     score1.value = "" 
//     score2.value = "" 
//     score3.value = "" 

// }




// QUESTION NO 13 :

// 13. Write a program to store student scores in an array & sort 
// the array in ascending order using Array’s sort method. 

// SOLUTION :


// function getScore() {
//     let student = [sco1.value, sco2.value, sco3.value, sco4.value, sco5.value, sco6.value, sco7.value, sco8.value, sco9.value, sco10.value];
//     console.log(student);
// student.sort(function(a,b){return a-b});
// console.log(student);
// }


// QUESTION NO 14 :

// 14. Write a program to sort the below mentioned array:
// var fruits = [“strawberry”, “apple”, “orange”, “banana”];

// SOLUTION :


// let fruits = ['strawberry', 'apple', 'orange', 'banana'];

// para.innerHTML = `<h2>Fruits List :</h2>   ${fruits}<br> <h2>Ordered  Fruits List are :</h2> ${(fruits.sort())}`


// QUESTION NO 14 :

// 15. Write a program to initialize an array with city names. Copy 
// 3 array elements from cities array to selectedCities array.

// SOLUTION :

// let cities = ['Karachi','Lahore','Quetta','Islamabad','Peshawar']



// QUESTION NO 16 :

// 16. Write a program to create a single string from the below 
// mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// SOLUTION :



// let arr = ['This' , ' is' ,  'my ', 'cat'];
// para.innerHTML = `<h2>ARRAY :</h2> ${arr} <br> <h2>String:</h2> ${arr.join(' ')}`


// QUESTION NO 17 :
// 17. Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they were 
// stored. (FIFO-First In First Out)

// SOLUTION :

// let newArr = ['keyboard','mouse','printer','monitor'];
// console.log(newArr);
// newArr.shift('power')
// console.log(newArr);

// para.innerHTML =`<h2>Devices:</h2> <b>Out:</b><br>${newArr[0]} <br> <b>Out:</b><br>${newArr[1]} <br> <b>Out:</b><br>${newArr[2]} <br> <b>Out:</b><br>${newArr[3]}`


// QUESTION NO 18 :
// 18. Create a new array. Store values one by one in such a way 
// that you can access the values in reverse order. (Last In-First 
// Out)

// SOLUTION :

// let newArr = ['keyboard','mouse','printer','monitor'];

// para.innerHTML =`<h2>Devices:</h2> <b>Out:</b><br>${newArr[3]}<br>  <br> <b>Out:</b><br>${newArr[2]}<br>  <br> <b>Out:</b><br>${newArr[1]}<br>  <br> <b>Out:</b><br>${newArr[0]}<br> `


// QUESTION NO 20 :

// 20. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// SOLUTION :

// let multidimensional = [[],[],[]];



// QUESTION NO 20 :

// 21. Declare and initialize a multidimensional array representing
// the following matrix:

// SOLUTION :

let multidimensionalArr = [['0','1','2','3'],['1','0','1','2'],['2','1','0','1']];
console.log(multidimensionalArr);
console.log(multidimensionalArr[0],[1],[2]);








0






































