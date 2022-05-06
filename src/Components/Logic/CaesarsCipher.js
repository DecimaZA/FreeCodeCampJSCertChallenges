import React from "react";

const Cipher = (str) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz .,!?'.toUpperCase().split('');
  let alphabet13 = 'nopqrstuvwxyzabcdefghijklm .,!?'.toUpperCase().split('');
  let decodedMsg = [];
  
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (str[i] === alphabet[j]) {
        decodedMsg.push(alphabet13[j]);
      }
    }
  }
  
  return (
    decodedMsg.join("")
  );    
};

  let result = Cipher("SERR CVMMN!");
    console.log(result);

export default Cipher;