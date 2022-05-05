import React from "react";
import InputField from "./UI/InputField";
//Components
import RomanNumeralChecker from "./Logic/RomanNumeral";
import Cipher from "./Logic/CaesarsCipher";
import Validator from "./Logic/TelValidator";
import PalindromeChecker from "./Logic/PalindromeCheck";
//MUI imports
import { Typography, Box } from "@mui/material";


const App = () => {
    return (
        <Box>
            <Typography variant='h4'>Palindrome Checker</Typography>
                <PalindromeChecker />
            <Typography variant='h4'>Telephone Number Validator</Typography>
                <Validator />
            <Typography variant='h4'>Roman Numeral Converter</Typography>
                <RomanNumeralChecker />
            <Typography variant='h4'>Caesar's Cipher</Typography>
                <Cipher />
        </Box>
    );
};

export default App;