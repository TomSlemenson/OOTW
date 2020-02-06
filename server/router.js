const path = require("path");
const router = require("express").Router();
const apiMalingList = require("./Routes/api/MailingList_Routes.js");
const apiMailBox = require("./Routes/api/MailBox.js");
const apiPayments = require("./Routes/api/Payments.js");


router.use("/api", apiMalingList);
router.use("/payments", apiPayments);
router.use("/send-email", apiMailBox);


router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;