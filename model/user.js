const mongoose = require('mongoose')


const options = {
    discriminatorKey : 'role' , 
    timestamps: true 
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },  
} , options)



const User = mongoose.model('User', userSchema);