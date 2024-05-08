const express = require ('express')
const categoryRouter = express.Router();
const {getmethod,postmethod,deletemethod,updatemethod,putmethod} = require('../../controllers/productController/product')
const {validateSchema} = require('../../controllers/productController/productValidation')

categoryRouter.get('/viewproduct',getmethod);
categoryRouter.post('/addproduct',validateSchema,postmethod);
categoryRouter.delete('/deleteproduct/:pro_id=?',deletemethod)
categoryRouter.patch('/updateproduct/:pro_id',updatemethod)
categoryRouter.put('/putproduct/:pro_id',putmethod)

module.exports = categoryRouter;

