import PropTypes from "prop-types";
import "./Button.scss";

function  Button ({text, onClick}) {
    return <button className={"btn" } onClick={(e) => onClick}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;