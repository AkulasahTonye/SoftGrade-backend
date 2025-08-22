function analyzeNumbers(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Please provide a non-empty array of numbers");
    }

    const largest = Math.max(...numbers);
    const smallest = Math.min(...numbers);
    const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

    return {
        largest,
        smallest,
        average
    };
}

// Example usage:
const numbers = [8, 3, 66,1,5,7,50];
console.log(analyzeNumbers(numbers));
// Output: { largest: 20, smallest: 3, average: 9.2 }



