/*
Generics means parameterized types. The idea is to allow type (Integer, String, … etc., and user-defined types) to be a parameter to methods, classes, and interfaces. Using Generics, it is possible to create classes,interfaces, functions that work with different data types. 
*/
function getFirst<F>(arr: F[]) {
     return arr[0];
}

console.log(getFirst<string>(["fdsf", "fdfd"]).toUpperCase());
type func = () => void;
function hello(cb: func) {
     setTimeout(cb, 1000);
}