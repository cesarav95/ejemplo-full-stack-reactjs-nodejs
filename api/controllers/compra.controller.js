const db = require('../db/mysql_connection');
let compraController = {};

compraController.guardarCompra = async() =>{
    try {

        const productos = req.body;
        db.getConnection((err,conn)=>{
            if(err){               
                res.status(500).json({error: true, message:err.message});    
                return;           
            }
            let querys_productos = "";
            for(p in productos){
                quequerys_productosrys += `UPDATE Compras SET Stock = Stock - ${p.Cantidad} WHERE Stock - ${p.Cantidad} >= 0;`;
            }
            
            conn.query(querys_productos,(error, results)=>{
                conn.release();
                if(error){
                    res.status(500).json({error: true, message:error.message, query: querys_productos});
                    return;
                };
                // Retornar datos
                res.status(200).json({
                    error: false,
                    message:'Exito, Su compra fue realizada.',
                });
            });
        });        
    } catch (error) {
        res.status(500).json({error:true, message:'Ocurrio un error: '+error.message});
    }
}

module.exports = compraController;