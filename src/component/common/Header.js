import React, {PropTypes} from 'react';
import { Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav>       
            <IndexLink to="/">Home</IndexLink>
            <Link to="/about">About</Link>
            <Link to="/course">course</Link>
            </nav>
    );
};

export default Header;