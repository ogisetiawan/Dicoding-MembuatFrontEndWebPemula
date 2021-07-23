/*
 * @Author: ogi.setiawan 
 * @Date: 2021-07-18 00:06:01 
 * @Last Modified by: ogi.setiawan
 * @Last Modified time: 2021-07-23 23:01:28
 */
//@ VARIABLE
//! Variable
const z = 100; //? initsial const z
console.log(z);
z = 200; //? tidak bisa karana var const
console.log(z); //? error

//! String
const answer = '"I think it\'s awesome!" he answered confidently'; //? tambah blackslash agar tanda petik juga ke output
console.log(answer);


//@ TIPE DATA
let x = "1";
console.log(typeof x); //? check tipe data on variable

//! Increment dan Decrement */
let postfix = 5;
console.log(postfix++); //? 5, karena ini ditampilin si variable dru baru ada operator ++
console.log(postfix); //? 6
let prefix = 5;
console.log(++prefix); //? 6

//! BigInt
const bigNumber = 1234567890123456789012345678901234567890n; //? tambah n untuk tipe data BigInt
const myInt = 1234567890123456789012345678901234567890;
console.log(bigNumber);
console.log(myInt);


//@ CONDITION / STATEMENT
//! If/Else Statement Ternary
const isMember = false; //? tipe boleean
const discount = isMember ? 0.1 : 0; //? jadi ga perlu check kondisi, karena sudah tipe data boolean
console.log("Anda mendapatkan diskon sebesar " + discount * 100 + "%");

//! If/Else statement
letscore = 88;
if (score >= 90) {
  result = "Selamat! Anda mendapatkan nilai A.";
} else if (score >= 80 && score <= 89) {
  result = "Anda mendapatkan nilai B.";
} else if (score >= 70 && score <= 79) {
  result = "Anda mendapatkan nilai C.";
} else if (score >= 60 && score <= 69) {
  result = "Anda mendapatkan nilai D.";
} else if (score <= 59) {
  result = "Anda mendapatkan nilai E.";
}
console.log(result);

//! Switch Statement
let language = "English";
let greeting = null;

switch (language) {
  case "English":
    greeting = "Good Morning!";
    break;
  case "French":
    greeting = "Bonjour!";
    break;
  case "Japanese":
    greeting = "Ohayou Gozaimasu!";
    break;
  default:
    greeting = "Selamat Pagi!";
}
console.log(greeting);


//@ LOOPING 
//! For Loop
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];
for (let index = 0; index < myArray.length; index++) { //? loop biasa, bisa get index/property tertentu
    console.log(myArray[index]);
}
console.log('-----BREAK---------');
for (const arrayItem of myArray) { //? loop by ES6 (2015), tanpa hitung length
  console.log(arrayItem);
}
console.log('-----BREAK---------');
myArray.forEach(element => {
    console.log(element);
});


//@ STRUKTUR DATA
//! Object
let object = {
    key1: "value1", //? object yang punya property key dan property value;
    key2: "value2",
    key3: "value3",
    "key empat": "value 4"  //? property key bertipe string;
} 
console.log(object.key1); //? call value pada sebuah property menggunakan (.) nama key
console.log(object["key empat"]); //? call value pada sebuah property menggunakan braket ([name_key]) atau property key bertipe string;
delete object.key2; //? delete property key pada sebuah object 
console.log(object);
object.key2 = 'value2_baru'; //? menambahkan property key baru
console.log(object);
//! Quiz Object
let restaurant = {
    name : 'dicoding',
    city : 'jakarta',
    "favorite drink": 'inti sari', 
    "favorite food": 'nasgor',
    isVegan: true 
}
let name = restaurant.name;
let favoriteDrink = restaurant["favorite drink"];
console.log(favoriteDrink);

//! Array
const myArray = ["Coklat", 42.5, 22, true, "Programming"];
myArray.push('new') //? add new array
console.log(myArray);
myArray.pop(); //? remove last array
myArray.shift(); //? remove first array
myArray.unshift("Apple"); //? add first data array
console.log(myArray);
delete myArray[1]; //? delete index 1 array
console.log(myArray);
myArray.splice(2, 2);  //? delete dari index ke-2 sebanyak 2 elemen selanjutnya
console.log(myArray); 
//! Quiz Array
let evenNumber = new Array();
for (let index = 1; index <=100; index++) { //? loop biasa, bisa get index/property tertentu
  if(index%2==0){
    evenNumber.push(index);
  }
}
console.log(evenNumber);
var str = "1,2,3,4,5,6";
var temp = new Array();
// This will return an array with strings "1", "2", etc.
temp = str.split(",");
console.log(temp);

//! Function
const greeting = function(name, language) { //? expression function, with a variable const and without wirite func name
  if(language === "English") {
      return "Good Morning " + name + "!";
  } else if (language === "French") {
      return "Bonjour " + name + "!";
  } else {
      return "Selamat Pagi " + name + "!";
  }
}
console.log(greeting('Ron', 'English'));
//! Quiz Function
const minimal = function (a, b){
  if(a < b || a > b){
    return Math.min(a,b) //? return nilai terkecil
  }else if(a == b){
    return a; //? if sama return param a
  }
}
console.log( minimal(3, 2));

const power = function(a,b){
  return Math.pow(a,b); //? return fungsi kuadrat
}
console.log(power(4, 0.5));

//@ BROWSER ENVIOREMENT
//! Browser Object Model
window.alert(1); //? error karena tidak di broswer yg available BOM
console.log(1);
//! Console
console.info('1')
console.log(1);
console.error(1);
