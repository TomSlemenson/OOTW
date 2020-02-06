const stripe = require('stripe')('sk_test_tFVMKNCQaOjxV8lzSVHdGIU200E5WtqZdy')
const uuid = require('uuid/v4')

module.exports = {
  payments: function (req, res) {
    console.log(req.body);

    const idempotency_key = uuid();

    stripe.charges.create({
      amount: req.body.product.price * 100,
      currency: "usd",
      source: req.body.token.id,
      receipt_email: req.body.token.email,
      description: `Purshased the ${req.body.product.name}`,
      shipping: {
        name: req.body.token.card.name,
        address: {
          line1: req.body.token.card.address_line1,
          line2: req.body.token.card.address_line2,
          city: req.body.token.card.address_city,
          country: req.body.token.card.address_country,
          postal_code: req.body.token.card.address_zip
        }
      }
    }, {
      idempotency_key
    }).then(function (err, charge) {
      console.log('res: ')
      res.send(err)
      res.send(charge)
    })

  }
}
