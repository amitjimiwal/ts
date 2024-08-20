type Employer = {
     readonly name: string;
     readonly age: number;
}
//Another way
const emp: Readonly<Employer> = {
     name: 'Amit',
     age: 38305
}

//UseCase:
/*
The config files of a project should be marked as readonly so that no one by any mistake changes it anywhere in the code.
*/