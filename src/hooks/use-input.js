import { useState } from "react"

const useInput = (params) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    
    let valueIsValid = true;
    if (params.required) {
        valueIsValid = enteredValue.trim() !== '';
    }
    //const valueIsValid = false;//validation(enteredValue);

    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBludHandler = (event) => {
        setIsTouched(true);
    }

    const validateValue = () => {

    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBludHandler,
    }
}

export default useInput;