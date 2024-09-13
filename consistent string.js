// Intuition
// The problem requires us to count the number of strings in words that only contain characters from allowed. We can approach this by:

// Creating a frequency array: To efficiently check if a character is in allowed.
// Iterating through words: For each word, check if all its characters are in allowed.

// Approach
// Initialize a frequency array: Create an array of size 26 to store the frequency of each lowercase letter in allowed.
// Populate the frequency array: Iterate through allowed and increment the frequency of each character.
// Iterate through words: For each word in words:
// Initialize a flag: Set a flag to true to indicate that the word is consistent.
// Iterate through characters in the word: For each character in the word:
// If the frequency of the character in the frequency array is 0, the word is not consistent. Set the flag to false and break.
// Increment the count: If the flag is still true after iterating through all characters, increment the count of consistent strings.
// Return the count: Return the final count of consistent strings.
// Complexity

// Complexity
// Time complexity:
// O(M)
// M is the total length characters in word.

// Space complexity:
// O(1)

// Code
// /**
//  * @param {string} allowed
//  * @param {string[]} words
//  * @return {number}
//  */
// var countConsistentStrings = function(allowed, words) {
//     const freq = new Array(26).fill(0);

//     // Create a frequency array for allowed characters
//     for (const char of allowed) {
//         freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
//     }

//     // Iterate through each word
//     let count = 0;
//     for (const word of words) {
//         let isConsistent = true;
//         for (const char of word) {
//             if (freq[char.charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
//                 isConsistent = false;
//                 break;
//             }
//         }

//         if (isConsistent) {
//             count++;
//         }
//     }

//     return count;
// };