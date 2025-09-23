// Test file for CodeFox review
function calculateSum(numbers) {
  let sum = 0;
  
  // Simple loop to calculate sum
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  return sum;
}

// Test the function
const testNumbers = [1, 2, 3, 4, 5];
const result = calculateSum(testNumbers);

console.log(`The sum is: ${result}`);

// This function has some potential issues for CodeFox to review
function processUserData(userData) {
  // Direct property access without validation
  const name = userData.name;
  const age = userData.age;
  
  // No error handling
  return {
    displayName: name.toUpperCase(),
    birthYear: new Date().getFullYear() - age
  };
}

// Example usage that might cause issues
const user = { name: "John", age: 25 };
const processed = processUserData(user);
console.log(processed);