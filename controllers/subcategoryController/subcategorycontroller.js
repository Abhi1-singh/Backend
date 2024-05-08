const connection = require ('../../models/dbconnect')
const getmethod = (req,res) =>{
    let query = "SELECT * FROM subcategory";
     
    connection.query(query,function(error,result){
        if(error){
            console.log("error...",error.sqlMessage);
        }
        else{
            res.send(result);
        }
    })
}
const postmethod = async (req,res) =>{
    let data = req.body;
    let query = 'INSERT INTO subcategory SET ?';
   await connection.query(query,data, function(error,result){
if(error){
console.log("error.." , error.SqlMessage);
}

    else{
        res.send(result);
    }

    })
};
const deletemethod = (req,res)=>{
    let data1 = req.params.subcat_id;
    let query = "DELETE FROM subcategory WHERE subcat_id =?";
    connection.query(query,data1, function(error,result){
        if(error){
        console.log("error.." , error.SqlMessage);
        }
        
            else{
                res.send(result);
            }
        
            });
} ;
const updatemethod = (req,res)=>{
    const data2 = [req.body.subcat_name,req.params.subcat_id]
    let query = "UPDATE subcategory SET subcat_name=? WHERE subcat_id=?"
    connection.query(query,data2,function(error,result){
        if(error) {
            console.log("error",error.sqlMessage);
         } 
         else{
            res.send(result);
         }   
    });
}
const putmethod = (req,res)=>{
    const data3 = [req.body.subcat_name,req.params.subcat_id]
    let query = "UPDATE subcategory SET subcat_name=? WHERE subcat_id=?"
    connection.query(query,data3,function(error,result){
        if(error) {
            console.log("error",error.sqlMessage);
         } 
         else{
            res.send(result);
         }   
         
    });
}
module.exports = { getmethod,postmethod,deletemethod,updatemethod,putmethod}

