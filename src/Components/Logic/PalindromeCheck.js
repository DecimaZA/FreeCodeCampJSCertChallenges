import React from "react";

const PalindromeChecker = () => {
    return (
        function palindrome(str) {
            let removedWhiteSpaceAndPuntuation = /[\s@.,\/#!$%\^&\*;:{}|=\-_`~()]/gi;
            let cleanedWord = str.replace(removedWhiteSpaceAndPuntuation, '');
                // console.log(cleanedWord);
        
            let firstIndexedString = cleanedWord.toLowerCase().split("");
            let secondIndexedString = cleanedWord.toLowerCase().split("");
        
            let isAPalindrome = true
        
            for (let i = 0; i < firstIndexedString.length; i++) {
                if (firstIndexedString[i] === secondIndexedString[(firstIndexedString.length - 1) - i]) {
                    // console.log(`${firstIndexedString[i]} equals ${secondIndexedString[(firstIndexedString.length - 1) - i]}`)
                } else {
                    isAPalindrome = false
                    break;
                }
            }
        
            return isAPalindrome
        }
    );
};

// let result = palindrome("almostomla");
//     console.log(result);

export default PalindromeChecker;