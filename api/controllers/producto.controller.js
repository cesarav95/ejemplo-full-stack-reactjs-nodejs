const db = require('../db/mysql_connection');

let productoController = {};

productoController.getListaCartegorias = async(req, res) =>{
    try {
        db.getConnection((err,conn)=>{
            if(err){               
                res.status(500).json({error: true, message:err.message});    
                return;           
            }
            
            const query_select_categorias = `SELECT * from Categorias`;
            conn.query(query_select_categorias,(error, results)=>{
                conn.release();
                if(error){
                    res.status(500).json({error: true, message:error.message});
                    return;
                };
                const datos = JSON.parse(JSON.stringify(results))[0]; // Recuperar lista de categorias
                // Retornar datos
                res.status(200).json({
                    error: false,
                    message:'exito',
                    data: datos
                });
            });
        }); 
    } catch (error) {
        res.status(500).json({error:true, message:'Ocurrio un error: '+error.message});
    }
    

}
productoController.getListaProductosCartegoria = async(req,res) =>{
    try {

        const idCategoria = req.params.idCategoria;
        db.getConnection((err,conn)=>{
            if(err){               
                res.status(500).json({error: true, message:err.message});    
                return;           
            }

            const query_lista_prod= `SELECT * from Productos WHERE idCategoria = ${idCategoria}`;
            conn.query(query_lista_prod,(error, results)=>{
                conn.release();
                if(error){
                    res.status(500).json({error: true, message:error.message});
                    return;
                };
                const datos = JSON.parse(JSON.stringify(results))[0]; // Recuperar lista de productos
                // Retornar datos
                res.status(200).json({
                    error: false,
                    message:'exito',
                    data: datos
                });
            });
        });        
    } catch (error) {
        res.status(500).json({error:true, message:'Ocurrio un error: '+error.message});
    }
}

module.exports = productoController;