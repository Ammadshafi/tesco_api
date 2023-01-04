const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const TeacherSchema= new Schema({
  
    username:{
        type:String,
        required: true,
        minlength: 3,
        maxlength: 255,
        unique:true
    },
    password:{
        type:String,
        required: true, 
        minlength: 3,
        maxlength:200
    },
    firstname:{
        type:String,
        required: true,
        minlength: 3,
        maxlength: 200
    },
    middlename:{
        type:String,
        
        minlength: 3,
        maxlength: 200
    },
    lastname:{
        type:String,
        required: true,
        minlength: 3,
        maxlength: 200
    },
    registerDate: {
        type: Date,
        default: Date.now
      }

})
const TeacherModel=mongoose.model('Teacher',TeacherSchema)
module.exports= TeacherModel
