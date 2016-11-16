
const formQuestions = [
    {
        name: "name",
        question: "Name:",
        questionType: "input",
        inputType: "text",
        placeholder: "Name.."
    },
    {
        name: "email",
        question: "Email:",
        questionType: "input",
        inputType: "email",
        placeholder: "Email.."
    },
    {
        name: "phone_number",
        question: "Phone number:",
        questionType: "input",
        inputType: "number",
        placeholder: "Phone number.."
    },
    {
        name: "additional_comments",
        question: "Comments/suggestions:",
        questionType: "textarea",
        rowCount: 10,
        placeholder: "Write some comments about what you think about the subject.."
    }
];

export default formQuestions;