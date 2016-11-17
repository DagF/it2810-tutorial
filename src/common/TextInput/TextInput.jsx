import React, {PropTypes} from 'react'
import './textInput.scss'

function getDefaultLayout(name, label, type, placeholder, value){
    return (
        <div className="text-input">
            <label htmlFor={name}>{label}</label>
            <input type={type} className="form-control" id={name} name={name} placeholder={placeholder || ""} defaultValue={value}/>
        </div>
    )
}

function getInlineLayout(name, label, type, placeholder, value){
    return (
    <div className="form-group text-input clearfix">
        <label className="control-label col-sm-2 inline-label" htmlFor={name}>{label}</label>
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
const TextInput = ({name, label, type = "text", placeholder, layout = "default", value}) => {

    function getHtml(){
        if(layout === "inline"){
            return getInlineLayout(name, label, type, placeholder, value);
        }else{
            return getDefaultLayout(name, label, type, placeholder, value);
        }
    }

    return (
        getHtml()
    )
};

TextInput.propTypes = {

    /**
     * This is used as the id and name of the input.
     */
    name: PropTypes.string.isRequired,
    /**
     * Label text of the input.
     */
    label: PropTypes.string.isRequired,
    /**
     * Input type.
     */
    type: PropTypes.oneOf(['text', 'password', 'submit', 'reset', 'color', 'date', 'datetime',
                            'datetime-local', 'email', 'month', 'number', 'range', 'search',
                            'tel', 'time', 'url', 'week']),
    /**
     * Text used as placeholder for the field.
     */
    placeholder: PropTypes.string,
    /**
     * Default value for the field.
     */
    value: PropTypes.string,
    /**
     * Layout of the label and input field.
     */
    layout: PropTypes.oneOf(['default', 'inline'])
};

export default TextInput;