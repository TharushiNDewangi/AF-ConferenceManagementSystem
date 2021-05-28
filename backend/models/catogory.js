const express = require('express');
const mongoose = require('mongoose');
const schema =mongoose.Schema;
const catogoryschema=new schema(
    {
        name: {
            type:String,
            required:true,
            trim:true
        },
        slug: {
            type:String,
            required:true,
            unique:true
            
        },
        catimage:{
            type:String,
        },
        parentid: { 
            type:String,
            
        },
        status: { 
            type:String,
            enum:['approved','rejected','pending'],
            default:'pending'
            
        }
       
    },{timestamps:true}
);


const catogory =mongoose.model("Catogory",catogoryschema);
module.exports=catogory;