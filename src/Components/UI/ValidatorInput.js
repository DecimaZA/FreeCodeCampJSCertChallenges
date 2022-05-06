import React, { useState } from "react";
import InputField from "./InputField";

const ValidatorInput = (str) => {
    const [submittedNumber, setSubmittedNumber] = useState(null);

    const onNumberSubmit = (str) => {
      setSubmittedNumber(str);
    };

    return (
        <div>
            <InputField 
                onSubmit={onNumberSubmit}
            />
            <h1>{onNumberSubmit}</h1>
        </div>
    );
};

export default ValidatorInput;