const router = require("express").Router();
const MailingList_Controller = require('../../Controllers/MailingList_Controller.js');

router.post('/mailing-list', MailingList_Controller.newFollower);

module.exports = router;