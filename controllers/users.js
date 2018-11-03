//const dbUsers = require('../db/db');
const db = require('../db/dbconnection');


module.exports = {
   users: (req,res) => { //Get
        db.query('SELECT * from prueba1',(error,results,fields) =>{
            if(error){
                res.send({error : "Ocurrio un error"});
            }

            res.send(results);
        });

   },
   postUsers: (req, res) =>{

    var nombre = req.body.nombre;
    db.query('INSERT INTO prueba1 (id,nombre) VALUES (NULL,?)',[nombre],(error,results,fields) =>{
        if(error){
            res.send({error : "Ocurrio un error"});
        }

        res.send(results);
    }); 


       

   },

   postEditUsers: (req, res) =>{

    var id = req.body.id;
    var nombre = req.body.nombre;
    const sql= `UPDATE prueba1 SET nombre = ${db.escape(nombre)} WHERE 
    id = ${db.escape(id)}`;
    
    -
        db.query(sql,(error,results,fields) =>{
            if(error){
                res.send({error : "Ocurrio un error"});
            }
    
            res.send(results);
        }); 
    
  
      
    },

    postDeletUsers: (req, res) =>{

          var id = req.body.id;
const sql = `DELETE FROM prueba1 WHERE ID = ${db.escape(id)}`;
db.query(sql,(error, results, fields)=>{
if(error) res.send(error);
res.send(results);
}); 
        }

}