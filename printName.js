// we want a script that we can type
// node printName.js [testName]
// => Welcome to WebDevCore [testName]

console.log(process.argv);
// argv[0] == node
// argv[1] == filename

const testName = process.argv[2];

function printName() {
    //console.log('Welcome to WebDevCore', testName);
    console.log('Welcome to WebDevCore ' + testName + '!');
    console.log(`Welcome to WebDevCore ${testName}!`);  // template literal
}
printName();