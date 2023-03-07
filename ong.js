//test 234
const x = 40;
let answer;

if (x > 30) {
    answer = "greater than 40";
} else {
    answer =  "less than 40";
}

let variable1;
let variable2 = variable1  || 'bar';
console.log(variable2 === 'bar'); // prints true

variable1 = 'foo';
variable2 = variable1  || 'bar';
console.log(variable2); // prints foo

// changed
