// Function to test if a string matches the pattern
const containsPattern = (inputString) => {
  return pattern.test(inputString);
};
let link = "http://51.20.43.8:5000";
console.log(containsPattern(link));
