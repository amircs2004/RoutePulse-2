const mongoose = require('mongoose')

const user = require('./user')

const driverSchema = new mongoose.Schema({
    isAvailable: { type: Boolean, default: false },
    currentVehicle: { type: String, required: true },
});

const Driver = user.discriminator('Driver' , driverSchema)

module.exports = Driver;