interface TypingTestResult {
     id: string;
     userid: string;
     wpm: number;
     date: Date;
     accuracy: number;
}
//Above is the schema of database

//we want to have a function that shows a particular test result from the database and show it to the user - only thing needed is wpm,accuracy

type Props = Pick<TypingTestResult, 'wpm' | 'accuracy'>;

//Now there is a single source of truth to this props, any types updates to the schema will lead to the changes in the types of props automatically

//
function showResult({ wpm, accuracy }: Props) {
     console.log(`Your accuracy is ${accuracy} with wpm of ${wpm}`);
}
