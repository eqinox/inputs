import { useSelector } from "react-redux";

import classes from './Result.module.css';

const Result = () => {
    const items = useSelector((state) => state.items.all);

    return (
        <div className={classes.result}>
            {items.map((item) => (
                <div key={item.id}>
                    {item.firstName && <div>{item.firstName}</div>}
                    {item.lastName && <div>{item.lastName}</div>}
                    {item.email && <div>{item.email}</div>}
                    {item.description && <div>{item.description}</div>}
                </div>
            ))}
        </div>
    )

}

export default Result;