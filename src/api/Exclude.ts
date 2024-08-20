//Just like Pick Exclude lets you exclude some types from a source

type Applicants = 'Dev' | 'CP' | 'DSA';
type GoogleType = Exclude<Applicants, 'Dev'>;
type StartupType = Extract<Applicants, 'Dev'>
const student: GoogleType = 'DSA';
const student2: GoogleType = 'CP';
const student3: StartupType = 'Dev';