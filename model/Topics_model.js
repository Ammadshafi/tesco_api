const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const TopicsSchema=new Schema({
    generatedCode:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    instructor:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
    


})

const TopicsModel=mongoose.model('Topic',TopicsSchema)
module.exports=TopicsModel