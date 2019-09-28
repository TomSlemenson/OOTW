const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mailingList = new Schema({
  fullName: {
    type: String,
    min: [1, 'Too few characters'],
    max: 100,
    required: [true, 'Please enter a username.'],
},
  email: {
    type: String,
    min: [3, 'Please enter an email in the correct format'],
    required: [true, 'Please enter an email'],
    unique: true
}
});

const MailingList = mongoose.model("Mailing List", mailingList);

module.exports = MailingList;