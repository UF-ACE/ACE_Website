const Email = require('../models/email-model')
require("dotenv").config();
const nodemailer = require('nodemailer');

sendEmail = async (req, res) => {
    var transporter = nodemailer.createTransport({
        // This will have to be changed with ACE credentials:
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.REACT_APP_ACE_EMAIL,
            pass: process.env.REACT_APP_ACE_EMAIL_PASSWORD
        },
        secure: true
    })

    transporter.verify((error, success) => {
        if (error) {
            console.log(error);
        } 
        else {
            console.log('Email transporter constructed');
        }
    });

    const name = req.body.name
    const email = req.body.email
    const message = req.body.message

    var mail = {
        from: name,
        to: process.env.REACT_APP_ACE_EMAIL,
        subject: 'Website Contact',
        html: `<b>Name: </b>${name}<br><b>Email: </b>${email}<br>` + message
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                err,
                message: 'Error sending email'
            })
        } 
        else {
            res.json({
                message: 'Email sent successfully'
            })
            console.log('Email from ' + name + ' sent successfully')
        }
    })
}

logEmail = async (req, res) => { 
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an email',
        })
    }
    const email = new Email(body)
    if (!email) {
        return res.status(400).json({ success: false, error: err })
    }
    email
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: email._id,
                message: 'Email logged',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Email not logged',
            })
        })
}

getEmails = async (req, res) => {  
    await Email.find({}, (err, emails) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!emails.length) {
            return res
                .status(404)
                .json({ success: false, error: 'People not found' })
        }
        return res.status(200).json({ success: true, data: emails })
    }).catch(err => console.log(err))
}

module.exports = { 
    sendEmail,
    logEmail,
    getEmails,
}