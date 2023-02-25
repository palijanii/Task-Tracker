import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title, onAdd, showAdd}) => {
    return (
        <header className="Header">
            <h1>{title}</h1>
            {/* Reusable Component Below */}
            <Button 
            color = {showAdd ? 'red' : 'green'} 
            text = {showAdd ? 'Hide' : 'Add'} 
            onClick= {onAdd} 
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


// CSS in JS
// const headingStyle = {

//     color: 'red', 
//     backgroundColor: 'black'

// }

export default Header
