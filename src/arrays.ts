//Given an array of positive integers as input, return the maximum value in the array
type NumberArr = number[];
function maximum(arr: NumberArr): number {
     return Math.max(...arr);
}
console.log(maximum([1, 0, 6, 7]));

interface User3 {
     name: string;
     age: number;
}

function getLegalUser(userList: User3[]): User3[] {
     return userList.filter(function cb(user) {
          return user.age > 18
     })
}

console.log(getLegalUser([{ name: 'fdfd', age: 19 }, {
     name: 'dsadsfdfdf', age: 17
}]))

type cb = (str: string, num: number) => string;

function letsGo(func: cb): string {
     return func('fdf', 1);
}

