const joi = require('joi')

const productSchema = joi.object({
    subcat_id:joi.number().min(3).max(10).required(),
    pro_id:joi.string().min(3).max(50).required(),
    pro_name:joi.string().min(2).max(50).required(),
    pro_price:joi.number().required()

})

const validateSchema = (req,res,next)=>{
    const{error,value} = productSchema.validate(req.body);
    if(error){
        console.log(error);
        return res.send("Invalid resgister")
    }
    next();
}
module.exports = {validateSchema}