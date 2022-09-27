import { useEffect, useState } from "react";
import Input from "./Input";
import classes from './AddForm.module.css';
import TextArea from "./TextArea";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/item-slice";
import { useNavigate } from "react-router-dom";
import { configActions } from "../store/config-slice";
import messageTypes from "../shared/message-types";
import { FormContext } from "../FormContext";
import formJSON from '../formElements.json';

const AddForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [elements, setElements] = useState(null);
    const { fields, page_label } = elements ?? {};

    useEffect(() => {
        setElements(formJSON[0])
    }, []);

    const handleChange = (id, event) => {
        event.target.setAttribute('dirty', true);
        const newElements = { ...elements }
        newElements.fields.forEach(field => {
            const { type, field_id } = field;

            if (id === field_id) {
                switch (type) {
                    case 'text':
                        field['value'] = event.target.value;
                        break;
                    case 'textarea':
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

    const submit = (event, second) => {
        event.preventDefault();

        const itemsForResult = [];

        for (let i = 0; i < event.target.length; i++) {
            const tempField = event.target[i];
            if (tempField.name) {
                const fieldToAdd = {
                    placeholder: tempField.placeholder,
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
                    {fields ? fields.map((field, i) => {
                        switch (field.type) {
                            case 'text':
                                return <Input
                                    key={i}
                                    id={field.id}
                                    placeholder={field.id}
                                    value={field.value}
                                    required={field.required}
                                />
                            case 'textarea':
                                return <TextArea
                                    key={i}
                                    id={field.id}
                                    placeholder={field.id}
                                    value={field.value}
                                    required={field.required}
                                />
                        }


                    }) : null}
                    <Button type="submit">Submit</Button>

                </form>
            </FormContext.Provider>
        </div>
    )

}

export default AddForm;