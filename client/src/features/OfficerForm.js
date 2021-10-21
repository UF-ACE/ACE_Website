import { useRef } from "react"
import React from 'react';
import { AST_PropAccess } from "terser";
import { propTypes } from "react-bootstrap/esm/Image";
import classes from './OfficerForm.modules.css'

function OfficerForm() {

    const titleInputRef = useRef();
    const nameInputRef = useRef();
    const yearInputRef = useRef();
    const linkedinInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredYear = yearInputRef.current.value;
        const enteredLinkedin = linkedinInputref.current.value;

        const OfficerData = {
            title = enteredTitle,
            name = enteredName,
            year = enteredYear,
            linkedin = enteredLinkedin,
        };
        /* Add onAddOfficer to OfficerForm attributes. */
        props.onAddOfficer(OfficerData);
    }
    return ( 
        /* Where does the modules.css come into play?*/
        <form className={classes.form} onSubmit={submitHandler}>

        </form> 
    );
}