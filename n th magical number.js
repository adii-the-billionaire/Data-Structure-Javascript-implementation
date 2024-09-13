function lcm(a, b) {
    // Calculate the greatest common divisor (GCD) using Euclid's algorithm
    function gcd(a, b) {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    // Calculate the least common multiple (LCM) using the relationship between GCD and LCM
    return (a * b) / gcd(a, b);
}

const mod = 1e9 + 7; // Use uppercase for constants

function nthMagicalNumber(n, a, b) {
    // Calculate the least common multiple of a and b
    let lcmAB = lcm(a, b);
    let left = 0,
        right = (a + b) * n; // Use `number` type for the range

    // Perform a binary search to find the nth magical number
    while (left < right) {
        let mid = Math.floor((left + right) / 2); // Calculate the middle value

        // Check if the mid value has n or more multiples of a or b, considering overlaps
        if (
            Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / lcmAB) >=
            n
        )
            right = mid; // Too high, adjust the right boundary
        else left = mid + 1; // Too low, adjust the left boundary
    }

    // Return the nth magical number modulo MOD
    return left % mod;
}