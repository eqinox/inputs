import { useSelector } from "react-redux";

import classes from './Result.module.css';

const Result = () => {
    const items = useSelector((state) => state.items.all);

    return (
        <div className={classes.containerStyle}>
            {items.map((item) => (
                <div key={item.id}>
                    {item.firstName && <div className={classes.rowContainerStyle}>
                        <span className={classes.spanStyle}>firstName:</span>{item.firstName}
                        </div>}
                    {item.lastName && <div className={classes.rowContainerStyle}>
                        <span className={classes.spanStyle}>lastName:</span>
                        {item.lastName}</div>}
                    {item.email && <div className={classes.rowContainerStyle}>
                        <span className={classes.spanStyle}>email:</span>
                        {item.email}</div>}
                    {item.description && <div className={classes.rowContainerStyle}>
                        <span className={classes.spanStyle}>description:</span>
                        {item.description}</div>}
                </div>
            ))}
        </div>
    )

}

export default Result;