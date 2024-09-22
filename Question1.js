function createCounter() {
    let count = 0; // private variable

    return function() {
        count++; // modifying the enclosed variable
        return count;
    };
}

const counter = createCounter(); // closure created
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
