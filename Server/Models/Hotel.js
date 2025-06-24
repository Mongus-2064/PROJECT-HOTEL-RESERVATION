import mongoose from 'mongoose';

const hotelschema = mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    location :{
        type: String,
        required: true,
    },
    description :{
        type: String,
        required: true,
    },
    taxcleardocument :{
        type: String,
        required: true,
    },
});

const Hotel = mongoose.model("Hotel",hotelschema );

export default Hotel;