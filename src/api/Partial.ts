interface usr {
     id: string;
     name: string;
     age: string;
     email: string;
     password: string;
};


type UpdateProps = Pick<usr, 'age' | 'name' | 'password'>;
// Partial Api let's you make all the properties of an object as optional properties.
type OptionalProps = Partial<UpdateProps>;

function update({ age, name, password }: OptionalProps) {
     console.log(`Hello ${name} and your age is ${age} and password ${password}`);
}

update({
     name:'Amit',
});

