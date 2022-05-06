import React from "react";
import InputField from "../UI/InputField";

const PalindromeChecker = (str) => {       
    let removedWhiteSpaceAndPuntuation = /[\s@.,\/#!$%\^&\*;:{}|=\-_`~()]/gi;
    let cleanedWord = str.toString().replace(removedWhiteSpaceAndPuntuation, '');

    let firstIndexedString = cleanedWord.toLowerCase().split("");
    let secondIndexedString = cleanedWord.toLowerCase().split("");

    let isAPalindrome = true
    
    for (let i = 0; i < firstIndexedString.length; i++) {
        if (firstIndexedString[i] === secondIndexedString[(firstIndexedString.length - 1) - i]) {
            console.log(`${firstIndexedString[i]} equals ${secondIndexedString[(firstIndexedString.length - 1) - i]}`)
        } else {
            isAPalindrome = false
            break;
        }
    }

    return (
        isAPalindrome
    );
};

let result = PalindromeChecker("eye");
    console.log(result);

export default PalindromeChecker;