const mongoose = require('mongoose');

const MassageShopSchema = new mongoose.Schema({
    
    name:{
        type : String,
        required : [true, 'Please add your name'],
        unique : true,
        trim : true,
        maxlength : [50, 'Name can not be more than 50 characters']
    },
    address:{
        type : String,
        required : [true, 'Please add an address']
    },
    tel: {
        type : String,
        required : [true, 'Please add an telephone number']
    },
    opentime: {
        type : String,
        required : [true, 'Please type an open-time']
    },
    closetime: {
        type : String,
        required : [true, 'Please type a close-time']
    }}
);


//Cascade delete reservations when a massageShop is deleted

const MassageShopSchemaOut = mongoose.models.MassageShop || mongoose.model('MassageShop', MassageShopSchema);

export default MassageShopSchemaOut
