import PropTypes from 'prop-types'
const Button = ({onClick, text, backgroundColor}) => {
    return (
        <button className='btn' style={{backgroundColor}} onClick={onClick}> {text}
        </button>
  ) 
  
}

Button.propTypes = {
    title: PropTypes.string,
    onclick: PropTypes.func
}

export default Button