"use strict";

// passed by value (number, string, boolean)
// let a = 1;
// let b = a;

// a = 10;

// console.log(a);
// console.log(b);

// passed by references
let numbers1 = [1, 2, 3, 4, 5]; // ember merah
let numbers2 = [...numbers1]; // ember besar

numbers2.push(60, 70, 80);

console.log(numbers1);
console.log(numbers2);

const person1 = {
  name: "A",
  age: 20,
};

const person2 = { ...person1 };

person1.name = "B";

console.log(person1);
console.log(person2);

const x = [1, 2, 3, 4];
// const y = [1, 2, 3, 4];
// const y = x;

// const x = { a: 1, b: 2 };
// const y = { a: 1, b: 2 };

for (let el of x) {
  console.log(el);
}

for (let i = 0; i < x.length; i++) {
  const el = x[i];
  console.log(el);
}

x.forEach((el) => {
  console.log(el);
});

// console.log(x == y);
