
let person = {
  name: "Alex",
  age: 25,
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  }
};


console.log(person.name); 
console.log(person.age);  


person.age = 26;
console.log(person.age); 


person.city = "Chennai";
console.log(person.city); 


person.sayHello(); 