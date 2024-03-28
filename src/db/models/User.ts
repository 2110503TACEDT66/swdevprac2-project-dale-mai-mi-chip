const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please add a name']
    },
    tel : {
        type : String,
        required : [true, 'Please add your telephone number']
    },
    email : {
        type : String,
        required : [true, 'Please add a email'],
        match : [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/, 'Please add a valid email'
        ]
    },
    password : {
        type : String,
        required : [true, 'Please add a password'],
        minlength : 5,
        select : false
    },
    role : {
        type : String,
        enum : ['user', 'admin'],
        default : 'user'
    }
});


const UserSchemaOut = mongoose.models.User || mongoose.model('User', UserSchema);

export default UserSchemaOut