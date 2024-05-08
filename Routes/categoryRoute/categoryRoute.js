
const express = require ('express')
const categoryRouter = express.Router();
const {getmethod,postmethod,deletemethod,updatemethod,putmethod} = require('../../controllers/categoryController/categoryController')
const {validateSchema} = require('../../controllers/categoryController/categoryValidation')
/**
  * @swagger
  * components:
  *       schemas:
  *              category:
  *                  type: object
  *                  properties:
  *                           cat_id:
  *                                  type: string
  *                           cat_name:
  *                                  type: string
  *        
  */
  /**
   * @swagger
   * /viewcategory:
   *         get:
   *              summary: Retrieve all category records
   *              description: node js get api testing
   *              responses:
   *                   200:
   *                        description: Successful retrievel of category records
   *                        content:
   *                             application/json:
   *                                      schema:
   *                                          type: array
   *                                          items:
   *                                               $ref : '#components/schemas/category'
   */

categoryRouter.get('/viewcategory',getmethod);
categoryRouter.post('/addcategory',validateSchema,postmethod);
categoryRouter.delete('/deletecategory/:cat_id=?',deletemethod)
categoryRouter.patch('/updatecategory/:cat_id',updatemethod)
categoryRouter.put('/putcategory/:cat_id',putmethod)

module.exports = categoryRouter;

