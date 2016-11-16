import React, {PropTypes} from 'react'
import './textInput.scss'

function getDefaultLayout(name, text, type, placeholder){
    return (
        <div className="form-group">
            <label htmlFor={name}>{text}</label>
            <input type={type} className="form-control" id={name} name={name} placeholder={placeholder || ""} />
        </div>
    )
}

function getInlineLayout(name, text, type, placeholder){
    return (
    <div className="form-group">
        <label className="control-label col-sm-2" htmlFor={name}>{text}</label>
        <div className="col-sm-10">
            <input type={type} className="form-control" id={name} name={name} placeholder={placeholder || ""}/>
        </div>
    </div>
    )
}

/**
 * Component is described here.
 *
 * @example ./TextInput.examples.md
 */
const TextInput = ({name, text, type = "text", placeholder, layout = "default"}) => {

    function getHtml(){
        if(layout === "inline"){
            return getInlineLayout(name, text, type, placeholder);
        }else{
            return getDefaultLayout(name, text, type, placeholder);
        }
    }

    return (
        getHtml()
    )
};

TextInput.propTypes = {

    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'submit', 'reset', 'color', 'date', 'datetime',
                            'datetime-local', 'email', 'month', 'number', 'range', 'search',
                            'tel', 'time', 'url', 'week']),
    placeholder: PropTypes.string,
    layout: PropTypes.string
};

export default TextInput;