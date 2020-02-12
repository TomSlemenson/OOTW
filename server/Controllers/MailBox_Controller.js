const db = require("../Models/index.js");

const transporter = require('@sendgrid/mail')
require('dotenv').config()
transporter.setApiKey(process.env.SENDGRID_KEY);

const auth = {
  service: 'gmail',
  newline: 'unix',
  port: 465,
  secure: true,
  auth: {
    user: 'ootwla@gmail.com',
    pass: 'ootwla1234'
  }
}

// const auth = {
//   auth: {
//     api_key: '09b7f9e6cb4ba9aa8265d6dc1df547da-f8faf5ef-f9c04032',
//     domain: 'sandbox539142b9fd8341f39c2c2c83c373b3ca.mailgun.org'
//   }
// }

const transporter = nodemailer.createTransport(auth);

// const transporter = nodemailer.createTransport(nodemailMailgun(auth));

module.exports = {
    sendEmailToBand: function (req, res) {
        const htmlText = 
                `<html>
                    <body>
                      <img src="cid:logo">
                      <br></br><hr>
                      <h4>${req.body.subject}</h4>
                      <p>${req.body.message}</p>
                      <hr><h5>Contact:</h5>
                      <small>${req.body.email}</small><br></br>
                      <small>${req.body.fullName}</small>
                    </body>
                  </html>`;
    
        const mailOptions = {
          from: 'ootwla@gmail.com',
          to: 'ootwla@gmail.com', // list of receivers
          subject: `From ${req.body.fullName} to OOTW`, // Subject line
          html: htmlText, // plain text body
          attachments: [{
            filename: 'OOTW_logo.png',
            path: __dirname + '/server_images/OOTW_logo.png',
            cid: 'logo' //my mistake was putting "cid:logo@cid" here! 
          }]
        };
    
    
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.log(err)
            res.status(422).json(err);
          }
          else
            console.log(info);
        });
        res.json({ status: 200, msg: "completed" })
      }
}