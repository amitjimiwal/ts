//Interfaces - assign types to object
interface User {
     firstName: string;
     lastName: string;
     email: string;
     age: number;
}
const user: User = {
     firstName: "harkirat",
     lastName: "singh",
     email: "email@gmail.com",
     age: 16,
}

function isLegal(user: User): boolean {
     const { age } = user;
     if (age > 18) return true;
     return false;
}

//optional properties
interface NewUser {
     firstName: string;
     lastName: string;
     email: string;
     age?: number;
}
console.log(isLegal(user));

//Implementing Interfaces as class
interface Person {
     name: string;
     age?: number;
     greeting: (name: string) => void;
}

class Employee implements Person {
     name: string;
     age: number;
     constructor(n: string, a: number) {
          this.age = a;
          this.name = n;
     }
     greeting() {
          console.log(this.name);
     }
}

const intern = new Employee("Amit Jimiwal", 19);
intern.greeting();

//diff between interfaces and types
/* 
 Types cannot be implmented
 Interfaces can be implemented through classes

 Types can have Union and Intersection
 Whereas interfaces can only be extended
*/

