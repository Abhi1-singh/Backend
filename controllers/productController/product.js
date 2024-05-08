const connection = require ('../../models/dbconnect')




const getmethod = (req,res) =>{
    let query = "SELECT * FROM product";
     
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
    let query = 'INSERT INTO product SET ?';
   await connection.query(query,data, function(error,result){
if(error){
console.log("error.." , error.sqlMessage);
}

    else{
        res.send(result);
    }

    })
};
const deletemethod = (req,res)=>{
    let data1 = req.params.pro_id;
    let query = "DELETE FROM product WHERE pro_id =?";
    connection.query(query,data1, function(error,result){
        if(error){
        console.log("error.." , error.sqlMessage);
        }
        
            else{
                res.send(result);
            }
        
            });
} ;
const updatemethod = (req,res)=>{
    const data2 = [req.body.pro_name,req.params.pro_id]
    let query = "UPDATE product SET pro_name=? WHERE pro_id=?"
    connection.query(query,data2,function(error,result){
        if(error) {
            console.log("error..",error.sqlMessage);
         } 
         else{
            res.send(result);
         }   
    });
}
const putmethod = (req,res)=>{
    const data3 = [req.body.pro_name,req.params.pro_id]
    let query = "UPDATE product SET pro_name=? WHERE pro_id=?"
    connection.query(query,data3,function(error,result){
        if(error) {
            console.log("error..",error.sqlMessage);
         } 
         else{
            res.send(result);
         }   
         
    });
}
module.exports = { getmethod,postmethod,deletemethod,updatemethod,putmethod}

