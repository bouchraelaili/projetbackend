const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Activity = new Schema(
    {
        titel : {
            type : String,
            required : true,
            trim : true,
        },
        description : {
            type : String,
            required : true,
            trim : true,
        },
        productImg : {
            type : String,
            required : true,
            trim : true,
        },
        price : {
            type : Number,
            required : true,
            trim : true,
        },
        category : {
            type : String,
            required : true,
            trim : true,
        },
       
 
        idSeller : {
            type : String,
            required : true,
            trim : true,
        },
        Adresse : {
            type : String,
            required : true,
            trim : true,
        },
        status : {
            type : String,
            required : true,
            trim : true,
        },
        id_seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Seller'
        },
       
    }
);

const ActivityList = mongoose.model("Activity",Activity);
module.exports = ActivityList;
