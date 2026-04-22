class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hi, I am ${this.name} and I am ${this.age} years old`;
    }
}


const user1 = new Person("John", 25);

console.log(user1.greet());