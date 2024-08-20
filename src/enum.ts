//enums aka Enumerations are basically used to aggregate types together

type KeyInput = 'up';
enum Keys {
     Up = 3,
     DOwn //4
}
function doSomething(keyPressed: Keys) {
     // do something.
}
doSomething(Keys.DOwn)
doSomething(Keys.Up);

enum Usertype {
     ADMIN = "admin",
     NORMAL = "normal",
     SUPERUSER = "superuser"
}
console.log(Usertype.ADMIN);
console.log(Usertype.SUPERUSER);
console.log(Usertype.NORMAL);

