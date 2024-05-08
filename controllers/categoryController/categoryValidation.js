const joi = require('joi')

const categorySchema = joi.object({
    cat_id:joi.number().min(3).max(10).required(),
    cat_name:joi.string().required()

})

const validateSchema = (req,res,next)=>{
    const{error,value} = categorySchema.validate(req.body);
    if(error){
        console.log(error);
        return res.send("Invalid resgister")
    }
    next();
}
module.exports = {validateSchema}