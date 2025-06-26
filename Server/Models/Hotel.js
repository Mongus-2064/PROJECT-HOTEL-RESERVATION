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
    price:{
        type: String,
        required:true,
    },
    image :{
        type: String,
        required: true,
    },
});

const Hotel = mongoose.model("Hotel",hotelschema );

export default Hotel;