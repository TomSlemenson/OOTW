const router = require("express").Router();
const Payments_Controller = require('../../Controllers/Payments_Controller');
const cors = require('cors')
const helmet = require('helmet')


router.post('/checkout', helmet(), cors({origin: [/http:\/\/localhost:\d+$/] || [/http:\/\/ootw.herokuapp:\d+$/] ,
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}), Payments_Controller.payments);


module.exports = router;