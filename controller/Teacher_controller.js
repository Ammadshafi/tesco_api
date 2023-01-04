const hashPassword = require('../middleware/PasswordHash/passwordhash')
const TeacherModel=require('../model/Teacher_model')


// Get all teacher Data

exports.get_all_teacher= async(req,res)=>{
    try{
        const teacher=await TeacherModel.find({})
        res.status(200).json({message:'Data fetch succesfully',success:true,data:teacher})
    }
    catch(err){
        res.status(500).send(err)
    }
}
exports.create_teacher=async(req,res)=>{
   const hash_password=await hashPassword(req.body.password)
    try{
        const teachers=await TeacherModel.findOne({username:req.body.username})
        if(teachers){
            res.status(400).json({message:"username already exits",success:false})
        }else{
          const teacher=  new TeacherModel({
              username:req.body.username,
              password:hash_password,
              firstname:req.body.firstname,
              lastname:req.body.lastname,
              middlename:req.body.middlename
            })
           try{
            await teacher.save()
            res.status(200).json({ sucess: true, message: "teacher data added" });
           }catch(err){
            return res.status(201).json({ success: false, msg: err.message });
           }
         
            
        }
    }
    catch(err){
        res.status(500).send(err)
    }
}

exports.delete_teacher=async(req,res)=>{
    try{
        const response=await TeacherModel.deleteOne({_id:req.params.id})
        response&&res.status(200).json({message:"data has been deleted",sucess:true,data:response})
    }
    catch(err){
        res.status(500).send(err)
    }

}
exports.update_teacher=async(req,res)=>{
    const filter=req.params.id
    try {
        const response = await TeacherModel.updateOne({_id:filter},{
            $set:{
                "firstname":req.body.firstname,
                "lastname":req.body.lastname,
                "username":req.body.username,
                "middlename":req.body.middlename,
                
            }
        })
        response&&res.status(200).json({success:true,data:response})
        
    } catch (err) {
        res.status(500).send(err)
        
    }


}