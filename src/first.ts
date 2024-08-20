function greeting(firstname: string, lastname: string, age: number): void {
     console.log(`Hello ${firstname} ${lastname}. Your age is ${age}`);
}

function sum(a: number, b: number): void {
     console.log(a + b);
}


//type inference - typescript compiler automatically assigns types to the function or variables by implicity referring to the types
//hover on the function to see
//Good practice to write return types on function always to make the code more strictier :);
function legal(age: number) {
     if (age >= 18) return true;
     return false;
}
greeting('Amit', 'Jimiwal', 21);
sum(4, 3);
console.log(legal(20));