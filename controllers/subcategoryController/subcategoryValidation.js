const joi = require('joi')

const subcategorySchema = joi.object({
    cat_id:joi.number().min(3).max(10).required(),
    subcat_id:joi.number().min(3).max(10).required(),
    subcat_name:joi.string().required()

})

const validateSchema = (req,res,next)=>{
    const{error,value} = subcategorySchema.validate(req.body);
    if(error){
        console.log(error);
        return res.send("Invalid resgister")
    }
    next();
}
module.exports = {validateSchema}