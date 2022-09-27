import Input from "./Input"
import Select from "./Select"
import TextArea from "./TextArea"
import classes from './AllElements.module.css';

const Element = ({ fields }) => {

    const renderAllFields = (field, i) => {
        switch (field.type) {
            case 'text':
                return <Input
                    key={i}
                    id={field.id}
                    placeholder={field.placeholder ? field.placeholder : field.id}
                    value={field.value}
                    required={field.required}
                />
            case 'textarea':
                return <TextArea
                    key={i}
                    id={field.id}
                    placeholder={field.placeholder ? field.placeholder : field.id}
                    value={field.value}
                    required={field.required}
                />
            case 'select':
                return <Select
                    key={i}
                    id={field.id}
                    placeholder={field.placeholder ? field.placeholder : field.id}
                    value={field.value}
                    options={field.options}
                    required={field.required}
                />
        }
    }

    const createFields = (fields) => {
        return fields.map((field, i) => {

            if (Array.isArray(field)) {
                return <div key={i} className={classes.combinedItem}>
                    {createFields(field)}
                </div>
            } else {
                return renderAllFields(field, i)
            }
        })
    }

    const result = createFields(fields);

    return result
}

export default Element;