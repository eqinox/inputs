import { useRef, useState } from "react";
import Input from "./Input";
import classes from './AddForm.module.css';
import TextArea from "./TextArea";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/item-slice";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/use-input";
import { configActions } from "../store/config-slice";
import messageTypes from "../shared/message-types";


const AddForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        value: firstName,
        isValid: nameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBludHandler: nameBlurHandler,
    } = useInput({
        required: true
    });

    const {
        value: lastName,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBludHandler: lastNameBlurHandler,
    } = useInput({
        required: true
    });

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBludHandler: emailBlurHandler,
    } = useInput({
        required: true
    });

    const {
        value: description,
        isValid: descriptionIsValid,
        hasError: descriptionHasError,
        valueChangeHandler: descriptionChangeHandler,
        inputBludHandler: descriptionBlurHandler
    } = useInput({
        required: false
    });

    const items = useSelector((state) => state.items.all);

    const inputFields = [
        {
            value: firstName,
            changeValue: nameChangeHandler,
            onBlur: nameBlurHandler,
            placeholder: "First Name",
            input: { id: 'firstName', type: 'text' },
            isValid: nameIsValid,
            hasError: nameInputHasError
        },
        {
            value: lastName,
            changeValue: lastNameChangeHandler,
            onBlur: lastNameBlurHandler,
            placeholder: "Last Name",
            input: { id: 'lastName', type: 'text' },
            isValid: lastNameIsValid,
            hasError: lastNameHasError
        },
        {
            value: email,
            changeValue: emailChangeHandler,
            onBlur: emailBlurHandler,
            placeholder: "Email",
            input: { id: 'email', type: 'email' },
            isValid: emailIsValid,
            hasError: emailHasError
        },
        {
            value: description,
            changeValue: descriptionChangeHandler,
            onBlur: descriptionBlurHandler,
            placeholder: "Description",
            input: { id: 'description', type: 'textarea' },
            isValid: descriptionIsValid,
            hasError: descriptionHasError
        },
    ];

    const submit = () => {
        const index = items.length + 1;
        const itemToAdd = {
            id: index,
            firstName: firstName,
            lastName: lastName,
            email: email,
            description: description
        }

        navigate('/result', { replace: true });
        dispatch(configActions.showMessage({ type: messageTypes.success, text: 'Thank you ' + inputFields.map((item) => item.value).join(' ') }));

        dispatch(itemActions.setItems(itemToAdd));
    }

    let valid = true;

    if (nameInputHasError || (!nameIsValid)) {
        valid = false;
    }
    if (lastNameHasError || (!lastNameIsValid)) {
        valid = false;
    }
    if (emailHasError || (!emailIsValid)) {
        valid = false;
    }

    return (
        <div className={classes.form}>
            {inputFields.map((item) => {
                let resultItem;
                if (item.input.type === 'textarea') {
                    resultItem = <TextArea
                        key={item.placeholder}
                        value={item.value}
                        changeValue={item.changeValue}
                        placeholder={item.placeholder}
                        input={item.input}
                        onBlur={item.onBlur}
                        isValid={item.isValid}
                        hasError={item.hasError}
                    />
                } else {
                    resultItem = <Input
                        key={item.placeholder}
                        value={item.value}
                        changeValue={item.changeValue}
                        placeholder={item.placeholder}
                        input={item.input}
                        onBlur={item.onBlur}
                        isValid={item.isValid}
                        hasError={item.hasError}
                    />
                }

                return resultItem;
            })}

            <Button onClick={submit} disabled={!valid} >Submit</Button>
        </div>
    )

}

export default AddForm;