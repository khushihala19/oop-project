class StringManipulator {
    cleanString(str) {

        return str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    }
}

class PalindromeChecker extends StringManipulator {
    
    isPalindrome(str) {

        const cleanStr = this.cleanString(str);
        
        const reverseStr = cleanStr.split(' ').reverse().join(' ');

        return cleanStr === reverseStr;
    }
}

let palindromeChecker = new PalindromeChecker();

let s1 = "car";
let s2 = "Hello, World!";

console.log(palindromeChecker.isPalindrome(s1)); 
console.log(palindromeChecker.isPalindrome(s2)); 
