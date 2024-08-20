

interface TypingResult {
     id: string;
     userid: string;
     wpm: number;
     date: Date;
     accuracy: number;
}

type Results = {
     [id: string]: Partial<TypingResult>
}
const res: Results = {
     '123': {
          id: '123'
     }
}
//Records - Recors are basically help you to define an Object at its core

type Enemies = Record<string, { name: string, power: number }>;

const enemy: Enemies = {
     'fdf': {
          name: 'fdf',
          power: 19
     },
     'dffdf': {
          name: 'fdf',
          power: 19
     },
}


//Map - Map is basically a javascript concept it's a Data structure that basically stores data in the form of key-value pair;

const usermap = new Map();

usermap.set('fdf', { name: 'dsf' });
usermap.set(10, { name: 'dsdf' })
console.log(usermap.get(10)); //{ name: 'dsdf' }

//Enforce a strong type to the map
const usermap2 = new Map<string, { name: string }>();

usermap2.set('fdf', { name: 'dsf' });
usermap2.set('dssd', { name: 'dsdf' })
console.log(usermap2.get('fddd')); //undefined