import React, {Component, PropTypes} from 'react'

/**
 * Component is described here.
 *
 * @example ./Test.examples.md
 */


export default class Test extends Component {

    getDefaultLayout(name, text, type, placeholder){
        return (
            <div className="form-group">
                <label htmlFor={name}>{text}</label>
                <input type={type} className="form-control" id={name} name={name} placeholder={placeholder || ""} />
            </div>
        )
    }

    getInlineLayout(name, text, type, placeholder){
        return (
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor={name}>{text}</label>
                <div className="col-sm-10">
                    <input type={type} className="form-control" id={name} name={name} placeholder={placeholder || ""}/>
                </div>
            </div>
        )
    }

    getHtml(){
        if(this.props.layout === "inline"){
            return this.getInlineLayout(this.props.name, this.props.text, this.props.type, this.props.placeholder);
        }else{
            return this.getDefaultLayout(this.props.name, this.props.text, this.props.type, this.props.placeholder);
        }
    }

    render(){
        return(
            this.getHtml()
        )
    }
}

Test.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'submit', 'reset', 'color', 'date', 'datetime',
        'datetime-local', 'email', 'month', 'number', 'range', 'search',
        'tel', 'time', 'url', 'week']),
    placeholder: PropTypes.string,
    layout: PropTypes.string
};