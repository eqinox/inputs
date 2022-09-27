import { useSelector } from "react-redux";

import classes from './Result.module.css';

const Result = () => {
    const items = useSelector((state) => state.items.all);

    return (
        <div className={classes.containerStyle}>
            {items.map((item) => (
                <div className={classes.separateRow} key={item.id}>
                    {item.map((field) => (
                        <div key={`${field.id}`}>
                            {field.value && <div className={classes.rowContainerStyle}>
                                <span className={classes.spanStyle}>{field.placeholder}</span>
                                {field.value}
                            </div>}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Result;