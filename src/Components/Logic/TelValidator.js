import React, { useState, useEffect } from "react";
import InputField from "../UI/InputField";

const TelephoneCheck = (str) => {
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
      ) 
        {
          return true
        } else {
        return false}
};

const ShowInput = () => {
  const [submittedNumber, setSubmittedNumber] = useState("");
  
  console.log('I RUN WITH EVERY RENDER');

  const onNumberSubmit = (e) => {
    setSubmittedNumber(e);
  }; 

  useEffect(() => {
    console.log('I ONLY RUN ONCE')
  }, [submittedNumber]);

  return (
    <div>
      <h3>Type telephone number here</h3>
        <input label="Outlined" variant="outlined"/>
        <InputField
          value={submittedNumber}
          onChange={(e) => setSubmittedNumber(e.target.value)}
        />
      <h1>{onNumberSubmit}</h1>
    </div>
  );
};

let result = TelephoneCheck("1 555-555-5555");
  console.log(result);

export default ShowInput;