const router = require("express").Router();
const MailBox_Controller = require('../../Controllers/MailBox_Controller.js');

router.post('/send-to-band', MailBox_Controller.sendEmailToBand);

module.exports = router;