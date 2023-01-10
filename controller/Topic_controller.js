const generateUniqueInteger = require("../middleware/GenerateCode/generateCode");
const TopicsModel = require("../model/Topics_model");

exports.create_topics = async (req, res) => {
  const randomCode = generateUniqueInteger();
  try {
    const response = new TopicsModel({
      generatedCode: randomCode,
      topic: req.body.topic,
      instructor: req.body.instructor,
    });
    if (response) {
      await response.save();
      return res
        .status(200)
        .json({ sucess: true, message: "Topic data added" });
    } else {
      return res.status(201).json({ success: false, msg: response });
    }
  } catch (error) {
   return res.status(500).send(error);
  }
};

exports.get_all_topics=async(req,res)=>{
    try {
      const response=await TopicsModel.find()
      if(response){
        return res
        .status(200)
        .json({ sucess: true, message: "Topic fetched",data:response });
      }else{
        return res.status(201).json({ success: false, msg: response });
      }

        
    } catch (error) {
        return res.status(500).send(error);
    }

}
exports.delete_topics=async(req,res)=>{
    try {
        const response=await TopicsModel.deleteOne({_id:req.params.id})
        if(response){
            res.status(200).json({message:"data has been deleted",sucess:true,data:response})
        }    
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.update_topic=async(req,res)=>{
    const filter=req.body.id
    try {
        const response = await TopicsModel.updateOne({_id:filter},{
            $set:{
                "topic":req.body.topic,
                "instructor":req.body.instructor,
               
                
            }
        })
        response&&res.status(200).json({success:true,data:response}) 
    } catch (error) {
        res.status(500).json({error})  
    }
}