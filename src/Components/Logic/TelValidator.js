import React from "react";

const Validator = () => {
  return (
    function telephoneCheck(str) {
      // Every valid number format option has a corresponding US country code format in the alternative
      let threeDashThreeDashFour = /^\d{3}-\d{3}-\d{4}$|^1 \d{3}-\d{3}-\d{4}$/;
      let threeBracesThreeDashFour = /^\(\d{3}\)\d{3}-\d{4}$|^1\(\d{3}\)\d{3}-\d{4}$/;
      let threeBracesSpaceThreeDashFour = /^\(\d{3}\) \d{3}-\d{4}$|^1 \(\d{3}\) \d{3}-\d{4}$/;
      let threeSpaceThreeSpaceFour = /^\d{3} \d{3} \d{4}$|^1 \d{3} \d{3} \d{4}$/;
      let tenNumbersUnseparated = /^\d{3}\d{3}\d{4}$|^1 ^\d{3}\d{3}\d{4}$/;
      let usaCountryCodeFormat = /^1 \d{3}-\d{3}-\d{4}$/;
      
      if (threeDashThreeDashFour.test(str) === true ||
          threeBracesThreeDashFour.test(str) === true ||
          threeBracesSpaceThreeDashFour.test(str) === true ||
          threeSpaceThreeSpaceFour.test(str) === true ||
          tenNumbersUnseparated.test(str) === true ||
          usaCountryCodeFormat.test(str) === true 
          ) {
        return true
      }
      return false
    }
  );
};

// let result = telephoneCheck("1 555-555-5555");
//   console.log(result)

export default Validator;