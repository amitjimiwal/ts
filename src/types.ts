//Types - types are similar like interfaces but have additional operations - | , &

type UserData = {
	firstName: string;
	lastName: string;
	age: number
}

interface User2 {
	firstName: string;
	lastName: string;
	age: number
}

// Let’s say you want to print the id of a user, which can be a number or a string.

//Union - |  (or)
type id = number | string;
const printId = (input: id) => {
	console.log(input);
}

//Intersection - &  (and)
type Linkedin = {
	linkedin_url: URL;
	linkedin_name: string;
}
interface Twitter {
	tw_url: URL;
	tw_name: string;
}

type VerifiedUSer = Linkedin & Twitter;

const verfUser: VerifiedUSer = {
	linkedin_name: 'adfdsf',
	tw_name: 'fdd',
	tw_url: new URL('https://x.com'),
	linkedin_url: new URL('https://x.com'),
}

printId(1)
printId("1");