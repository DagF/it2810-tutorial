import React, {PropTypes} from 'react'
import './form.scss'

/**
 * Component is described here.
 *
 * @example ./Form.examples.md
 */


function getHtmlForDefaultQuestions(questions, buttonType, buttonText, action, method){
    return (
    <form  action={action} method={method}>
        {questions.map((question) => {
                if(question.questionType === "textarea"){
                    return getDefaultTextarea(question);
                }else {
                    return getDefaultInput(question);
                }
            })}
        {getSubmitButton(buttonType, buttonText)}
    </form>
    )
}

function getHtmlForInlineQuestions(questions, buttonType, buttonText, action, method){
    return (
        <form action={action} method={method} className="form-horizontal">
            {questions.map((question) => {
                if(question.questionType === "textarea"){
                    return getInlineTextarea(question);
                }else {
                    return getInlineInput(question);
                }
            })}
            {getSubmitButton(buttonType, buttonText)}
        </form>)
}

function getInlineTextarea(question){
    return(
        <div className="form-group" key={question.name}>
            <label className="control-label col-sm-2" htmlFor={question.name}>{question.question}</label>
            <div className="col-sm-10">
                <textarea rows={question.rowCount || 5} className="form-control" placeholder={question.placeholder} name={question.name} id={question.name}></textarea>
            </div>
        </div>
    )
}

function getDefaultTextarea(question){
    return(
        <div className="form-group" key={question.name}>
            <label className="control-label" htmlFor={question.name}>{question.question}</label>
            <textarea rows={question.rowCount || 5} className="form-control" placeholder={question.placeholder} name={question.name} id={question.name}></textarea>
        </div>
    )
}

function getInlineInput(question){
    return(
        <div className="form-group" key={question.name}>
            <label className="control-label col-sm-2" htmlFor={question.name}>{question.question}</label>
            <div className="col-sm-10">
                <input type={question.inputType} className="form-control" id={question.name} name={question.name} placeholder={question.placeholder}/>
            </div>
        </div>
    )
}

function getDefaultInput(question){
    return(
        <div className="form-group" key={question.name}>
            <label className="control-label" htmlFor={question.name}>{question.question}</label>
            <input type={question.inputType} className="form-control" placeholder={question.placeholder} name={question.name} id={question.name}/>
        </div>
    )
}

function getSubmitButton(buttonType, buttonText){
    return <input type="submit" className={"btn btn-" + {buttonType}} value={buttonText}/>;
}



const Form = ({questions, formLayout = "default", action, method, buttonText = "Submit", buttonType = "default"}) => {

    function getQuestions(){
        if(formLayout === "inline"){
            return getHtmlForInlineQuestions(questions, buttonType, buttonText, action, method);
        }
        else{
            return getHtmlForDefaultQuestions(questions, buttonType, buttonText, action, method);
        }
    }
    return (
        getQuestions()
    )
};

Form.propTypes = {
    questions: PropTypes.object.isRequired,
    formLayout: PropTypes.oneOf(['default', 'inline']),
    action: PropTypes.func,
    method: PropTypes.oneOf(['get', 'post']),
    buttonText: PropTypes.string,
    buttonType: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger', 'link'])
};

export default Form;