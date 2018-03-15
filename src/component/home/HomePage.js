import React from 'react';
import {Link} from 'react-router';

class Homepage extends React.Component {
render() {
    return (
<div>
    <h1> Title</h1>
    <p>HI</p>
    <Link to="about"> Learn more</Link>
    </div>
    );
}
}

export default Homepage;