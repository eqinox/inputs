import { useEffect, useState } from "react";
import classes from './AddForm.module.css';
import Button from "./elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/item-slice";
import { useNavigate } from "react-router-dom";
import { configActions } from "../store/config-slice";
import messageTypes from "../shared/message-types";
import { FormContext } from "../FormContext";
import formJSON from '../formElements.json';
import Element from "./elements/Element";

const AddForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [elements, setElements] = useState(null);
    const { fields, page_label } = elements ?? {};

    useEffect(() => {
        setElements(formJSON[0])
    }, []);

    const handleChange = (givenId, event) => {
        event.target.setAttribute('dirty', true);
        const newElements = { ...elements }
        newElements.fields.forEach(field => {
            const { type, id } = field;
            if (givenId === id) {
                switch (type) {
                    case 'text':
                        field['value'] = event.target.value;
                        break;
                    default:
                        field['value'] = event.target.value;
                        break;
                }
            }

            setElements(newElements)
        });
    }
    
    const items = useSelector((state) => state.items.all); 

    const submit = (event) => {
        event.preventDefault();

        const itemsForResult = [];

        for (let i = 0; i < event.target.length; i++) {
            const tempField = event.target[i];
            if (tempField.name) {
                const fieldToAdd = {
                    placeholder: tempField.placeholder || tempField.name,
                    value: tempField.value,
                    id: i + 1 // used for key
                };
                itemsForResult.push(fieldToAdd);
            }
        }

        itemsForResult['id'] = items.length; // used for key
        navigate('/result', { replace: true });
        dispatch(configActions.showMessage({ type: messageTypes.success, text: 'Thank you ' + itemsForResult.map((item) => item.value).join(' ') }));
        dispatch(itemActions.setItems(itemsForResult));
    } 

    return (
        <div className={classes.form}>
            <FormContext.Provider value={{ handleChange }}>
                <form onSubmit={submit} >
                    {fields ? <Element fields={fields} /> : null}

                    <Button type="submit"  >Submit</Button>
                    <Button type="button" disabled={true} >Submit</Button> 

                </form>
            </FormContext.Provider>
        </div>
    )

}

export default AddForm;