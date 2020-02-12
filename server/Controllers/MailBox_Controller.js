const db = require("../Models/index.js");
const transporter = require('@sendgrid/mail')
require('dotenv').config()
transporter.setApiKey(process.env.SENDGRID_KEY);


module.exports = {
    sendEmailToBand: function (req, res) {
        const htmlText = 
                `<html>
                    <body>
                    <h1>OOTW HAS A NEW MSG!</h1>
                      <br></br><hr>
                      <h4>${req.body.subject}</h4>
                      <p>${req.body.message}</p>
                      <hr><h5>Contact:</h5>
                      <small>${req.body.email}</small><br></br>
                      <small>${req.body.fullName}</small>
                    </body>
                  </html>`;

        const msg = {
          to: 'ootwla@gmail.com',
          from: 'ootwla@gmail.com',
          subject: `From ${req.body.fullName} to OOTW`,
          text: 'OOTW HAS AN EMAIL',
          html: htmlText,

        };

    
        transporter.send(msg, function (err, info) {
          if (err) {
            res.status(422).json(err);
          }
        }
        );
        res.json({ status: 200, msg: "completed" })
      } 
     
}
