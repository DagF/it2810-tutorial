import React, {PropTypes} from 'react'
import './textInput.scss'

function getDefaultLayout(name, text, type, placeholder, value){
    return (
        <div className="text-input">
            <label htmlFor={name}>{text}</label>
            <input type={type} className="form-control" id={name} name={name} placeholder={placeholder || ""} defaultValue={value}/>
        </div>
    )
}

function getInlineLayout(name, text, type, placeholder, value){
    return (
    <div className="form-group text-input clearfix">
        <label className="control-label col-sm-2 inline-label" htmlFor={name}>{text}</label>
        <div className="col-sm-10">
            <input type={type} className="form-control" id={name} name={name} placeholder={placeholder || ""} defaultValue={value}/>
        </div>
    </div>

    )
}

/**
 * Component is described here.
 *
 * @example ./TextInput.examples.md
 */
const TextInput = ({name, text, type = "text", placeholder, layout = "default", value}) => {

    function getHtml(){
        if(layout === "inline"){
            return getInlineLayout(name, text, type, placeholder, value);
        }else{
            return getDefaultLayout(name, text, type, placeholder, value);
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
    value: PropTypes.string,
    layout: PropTypes.string
};

export default TextInput;