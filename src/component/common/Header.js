import React, {PropTypes} from 'react';
import { Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav>       
            <IndexLink to="/">Home</IndexLink>
            <IndexLink to="/about">About</IndexLink>
            </nav>
    );
};

export default Header;