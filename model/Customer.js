const user = require('./user')

const CustermorSchema = new mongoose.Schema({
preferredPaymentMethod: { type: String, default: 'Cash' },
});

const Customer = user.discriminator('Customer' , CustermorSchema)

module.exports = Customer;