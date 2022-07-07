const mongoose = require('mongoose');

const NewSchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    archiveDate:{ 
        type: Date,
        required: false
    },
    date:{ 
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('News', NewSchema)