interface UserN {
     name: string;
     age: number;
}

function sumofAge(user1: UserN, user2: UserN): number {
     return user1.age + user2.age;
}

console.log(sumofAge({
     name: 'hanji',
     age: 100
}, {
     name: "Hello",
     age: 100
}));