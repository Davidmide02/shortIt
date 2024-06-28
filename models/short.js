const mongoose = require("mongoose")
const shortId = require("shortid")

const shortUrlSchema = new mongoose.Schema({
    originalUrl:{
        type:String,
        required:true,
    },

    shortUrl:{
        type:String,
        require:true,
        default:shortId.generate
    },

    clicks:{
        type: Number,
        require:true,
        default:0,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

const Link = mongoose.model("Link", shortUrlSchema)

module.exports = Link;
