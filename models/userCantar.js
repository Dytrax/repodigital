const mongoose = require('mongoose');
//import ClanSchema from './Clan.js'
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Please add an email'],
        maxlength: [50, 'nationality cannot be more than 50 characters'],
        validate: {
            validator: function (value) {
                // check for correct email format
                return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
            },
            message: `Please enter a valid email address!`
        }
    },
    name: {
        type: String,
        required: [true, 'Please add a name'],
        maxlength: [40, 'Name cannot be more than 40 characters']
    },
    mobile: {
        type: String,
        required: [true, 'Please add a number'],
    }, 
    age: {
        type: Number,
        required: [true, 'Please add a age'],
    },
    
    password: {
        type: String,
        required: [true, 'Please add a password'],
        //maxlength:[20, 'password cannot be more than 20 characters'],
    },
    created: {
        type: Date,
        default: Date.now()
    }
})


export default (mongoose.models && mongoose.models.User
    ? mongoose.models.User
    : mongoose.model('User', UserSchema));