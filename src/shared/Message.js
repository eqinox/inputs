import { useDispatch } from 'react-redux';
import { configActions } from '../store/config-slice';
import messageTypes from './message-types';
import classes from './Message.module.css';


const Message = (props) => {
    const dispatch = useDispatch();

    const hideMessage = () => {
        dispatch(configActions.hideMessage());
    }

    let background = classes.info;

    switch (props.type) {
        case messageTypes.success: {
            background = classes.success;
            break;
        }
        case messageTypes.error: {
            background = classes.error;
            break;
        }
        case messageTypes.info: {
            background = classes.info
            break;
        }
    }

    return (
        <div onClick={hideMessage} className={classes.message + " " + background} >
            {props.text}
        </div>
    )
}

export default Message;