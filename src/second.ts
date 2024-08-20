function inner(): void {
     console.log("Inner function running");
}

function outer(cb: () => void) {
     setTimeout(cb, 1000);
}

//if noImplicit any is true => you can use implicit any types 
// but if vice-versa , implicit any will give errors while you can explicity mark any as type
function implicitTest(a: any) {
     console.log(a);
}

outer(inner);