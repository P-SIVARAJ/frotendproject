
//number , string , arrays , objects , boolean
// int value =5;

// int num =5;  // let , const , var - outdated X

let value = 5; // within the scope - dynamically typed  / python
value = 6;

console.log(value); // ' '," "

const pi = 3.14; // values should not be change in future

console.log(pi);

value = "5"; // global (no security) //5
console.log(typeof value);
// alert(value)


value = Number(6); //6
num = Number(6);
console.log(typeof num);
num = "5"; // 5
console.log(num + num); //55

console.log(typeof num);

console.log(typeof value);

console.log(value + value); // 6+6 = 12
/*food = Number(prompt("Whats the food Amount?"));
      console.log(food);
      tipPercentage = Number(prompt("whats the tip% ??") / 100);
      console.log(tipPercentage);

      tip= food * tipPercentage; // "100" + '20' // 10020
      totalAmount=add(food,tip);
      console.log(totalAmount);

      alert("Your Total AMount is : " + totalAmount); */

Math.floor(); // round down
Math.ceil(); // round up

// ** -> exponential

//let weather = prompt("whats your weather ??");

/*
      if (weather == "rainy") {
        console.log("Take your Umbrella");
      } else {
        console.log("Wear your glasses");
      } */

// function - a block of code , which is reusable by calling its name
function sayMyName(name) {
  let greeting = Hi ${name} , welcome to my webpage; // template literals
  return greeting;
}
function add(a, b) {
  return a + b;
}

console.log(sayMyName("Kathir"));
console.log(sayMyName("Ram"));

//Arrow Function

const func = () => {
  return;
};

const sum = (a, b) => a + b; // return a+b

console.log(The sum is : ${sum(3, 4)});

let fruits = ["mango", "apple", "orange", "grapes"];

console.log(fruits[0]); // mango // index
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits); // direct name

console.log(fruits);

fruits.push("Pear");
console.log(fruits);
// slicing
console.log(fruits.slice(1, 5));
console.log("index is :" + fruits.indexOf("grapes"));

//object
const myObject = {
  key1: "value1",
  key2: "value2",
};
const person1 = {
  name: "Hari",
  shirt: "White",
  department: "IT",
};

// object access - dot notation , bracket notation

console.log(person1.name); // person1['name'];
console.log(person1.shirt);
person1.phone = "9876543210";
// dot notation value add , bracket notation
person1["email"] = "hari@gmail.com";
console.log(person1);

// Arrow Function

const functionName = (a, b) => {
  return a + b;
};

// objects inside a function

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 200000,
    debt: 50000,
    networth: function () {
      return this.assets - this.debt;
    },
  };

  let sentence = `Hi , I'm ${person.name} . I'm wearing ${
    person.shirt
  } color shirt . And my networth is ${person.networth()}`;

  return sentence;
};

const intro = (person) => {
  console.log(person.email);
};


let person = {
  email: "abcd@gamil.com",
  ph: "98765345678",
};

intro(person);

console.log(introducer("Hari", "white"));