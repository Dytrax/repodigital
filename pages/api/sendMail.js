import nodemailer from "nodemailer";
const hbs = require('nodemailer-express-handlebars');
const emailPass = "Cg0508electromagnetismo"
const email = 'carlos.gs.andres@gmail.com'
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: email,
        pass: emailPass
    }
})

export default async (req, res) => {

    const { senderMail, name, content, recipientMail } = req.body
    console.log(senderMail)
    res.status(200).send({
        data:senderMail
    })

   
}