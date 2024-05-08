const express = require ('express')
const categoryRouter = express.Router();
const {getmethod,postmethod,deletemethod,updatemethod,putmethod} = require('../../controllers/subcategoryController/subcategorycontroller')
const {validateSchema} = require('../../controllers/subcategoryController/subcategoryValidation')

categoryRouter.get('/viewsubcategory',getmethod);
categoryRouter.post('/addsubcategory',validateSchema,postmethod);
categoryRouter.delete('/deletesubcategory/:subcat_id=?',deletemethod)
categoryRouter.patch('/updatesubcategory/:subcat_id',updatemethod)
categoryRouter.put('/putsubcategory/:subcat_id',putmethod)


module.exports = categoryRouter;

