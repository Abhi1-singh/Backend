const connection = require ('../../models/dbconnect')
const getmethod = (req,res) =>{
    let query = "SELECT * FROM category";
     
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
    let query = 'INSERT INTO category SET ?';
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
    let data1 = req.params.cat_id;
    let query = "DELETE FROM category WHERE cat_id =?";
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
    const data2 = [req.body.cat_name,req.params.cat_id]
    let query = "UPDATE category SET cat_name=? WHERE cat_id=?"
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
    const data3 = [req.body.cat_name,req.params.cat_id]
    let query = "UPDATE category SET cat_name=? WHERE cat_id=?"
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
