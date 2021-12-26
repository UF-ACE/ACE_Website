import React, { useState } from 'react'
//import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import { Button } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import apis from '../../api/index'
import styles from "./Footer.module.css";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || message === '') {
            alert("Please fill out the entire form to have your response recorded.")
        }
        else {
            var data = {
                name: name,
                email: email,
                message: message.toString()
            }
            apis.sendEmail(data)
            apis.logEmail(data)
        
            document.getElementById('name').value=''
            document.getElementById('email').value=''
            document.getElementById('message').value=''
            setName('')
            setEmail('')
            setMessage('')
            alert("Your response has been recorded.")
        }
    }

    const openGoogleForm = () => {
        window.open("https://forms.gle/wV2grmmgzS5eRorB6", "_blank")
    }

    return(
        <Row>
            <Col>
                <Button
                    variant="secondary"
                    type="submit"
                    size="lg"
                    className={styles.submit_button}
                    onClick={openGoogleForm}
                >
                Contact Form
                </Button>
            </Col>
        </Row>
            /*
            Uncomment the following for an interactive contact form on the footer that uses the above functions
            Currently, this functionality is handled by a link to a Google Form for security reasons
            -> May have to change styling of footer for correct display
            
            <Row className="mb-3">
                <Form name = "Contact-Form" onSubmit={handleSubmit}> 
                    <FormGroup className="mr-3">
                        <FormLabel>Full Name</FormLabel>
                        <FormControl 
                        size="sm" 
                        type="text"
                        onChange={(e) => setName(e.target.value)} value = {name}
                        id="name"
                        />
                    </FormGroup>
                    <FormGroup className="ml-3">
                        <FormLabel>Email Address</FormLabel>
                        <FormControl
                        size="sm"
                        type="email"
                        placeholder="example@example.com"
                        onChange={(e) => setEmail(e.target.value)} value = {email}
                        id="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel className="mr-3">Message</FormLabel>
                        <FormControl 
                        as="textarea" 
                        size="sm" 
                        type="text"
                        onChange={(e) => setMessage(e.target.value)} value = {message}
                        id="message"
                        />
                    </FormGroup>
                    <Button
                        variant="secondary"
                        type="submit"
                        size="sm"
                        className="text-center mt-3"
                    >
                    Submit
                    </Button>
                </Form>
            </Row>
            */
    )
}

export default ContactForm;