const db = require("../Models/index.js");
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  newline: 'unix',
  auth: {
    user: 'tslemenson@gmail.com',
    pass: 'Plus-445'
  }
});

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
          from: 'OOTW Email Service',
          to: 'tslemenson@gmail.com', // list of receivers
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