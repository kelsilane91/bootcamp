var age = prompt("What is your age?");

// if age is negative print error
if (age < 0) {
  console.log("oops, age cannot be negative");
}
// if age is 21 print "Happy Birthday"
if ((age = 21)) {
  console.log("Happy 21st Birthday!");
}
// if age is odd print " your age is odd"
if (age % 2 !== 0) {
  console.log("your age is odd");
}
// if age is a perfect square print "perfect square"
if (age % Math.sqrt(age) === 0) {
  console.log("pefect square");
}
