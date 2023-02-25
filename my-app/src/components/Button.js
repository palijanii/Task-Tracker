import PropTypes from 'prop-types';

// const Button = ({ color, text, onClick}) => {

//     return (
//         <div>
//             <button onClick={onClick} style = {{backgroundColor: color}} className="btn">{text}</button>
//         </div>
//     )
// }

const Button = (props) => {

    return (
        <div>
            <button onClick={props.onClick} style = {{backgroundColor: props.color}} className="btn">{props.text}</button>
        </div>
    )
}



Button.defaultProps = {
    color: 'steelblue'
}


Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
