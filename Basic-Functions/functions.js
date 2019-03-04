// write a function isEven() which takes a single numeric argument
// and returns true if the number is even and false otherwise
function isEven(number) {
  return (number % 2 === 0);
}

// write a function factorial() which takes a single numeric arguement
// and returns the factorial of that number
// 4! is 4x3x2x1
// 6! is 6x5x4x3x2x1
// 0! is 1

function factorial(number){
    let factorial = 1;
    for(i = factorial; i <= number; i++){
        factorial *= i;
    }
    return factorial;
}

// write a function kebabToSnake() which takes a single kebab-cased string argument
// and returns the snake_cased version
// basically replace "-"s with "_"s
function kebabToSnake(string){
    return newString = string.replace(/-/g, "_");
}