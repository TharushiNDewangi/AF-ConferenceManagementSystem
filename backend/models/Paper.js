const express = require('express');
const mongoose = require('mongoose');
const schema =mongoose.Schema;
const paperschema=new schema(
    {
        name: {
            type: String,
            
            //  required:true,
            //  trim:true
        },
        
        phnum:{
            type:String,
            // required: true
        },
        email:{
            type: String,
            // required:true
        },
        status:{
            type:String,
            enum:['approved','rejected','pending'],
            default:'pending'
        },
       
        researchpaper:[
            { fil: {type: String}}
        ],
        // createBy:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true },
        updatedAt:Date,
        
        },{ timestamps: true})
        

const pdf =mongoose.model("Researchpaper",paperschema);
module.exports=pdf;
