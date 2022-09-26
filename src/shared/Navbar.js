import { Link } from "react-router-dom";

import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav >
            <ul>
                <li>
                    <Link to="/add">Add</Link>
                </li>

                <li><Link to="/result">Result</Link></li>
            </ul>
        </nav>
    )

}

export default Navbar;