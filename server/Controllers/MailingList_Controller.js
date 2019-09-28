const db = require("../Models/index.js")

module.exports = {
    newFollower: function (req, res) {
        console.log(req.body)
        db.MailingList.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    }
}
