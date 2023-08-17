const controlador = {};

controlador.iniciar=(req, res)=>{
    const datosUsuario= {usuario:req.body.tfUsuario, passwd:req.body.tfContrasena};

    req.getConnection((err, conn)=>{
        if(err) throw err;

        conn.query("SELECT * FROM usuarios WHERE Usuario=? AND Contrasena=?", [datosUsuario.usuario, datosUsuario.passwd],(error,row)=>{
            if(row.length==1)
            {
                req.session.usuario=datosUsuario.usuario;
                req.session.passwd=datosUsuario.passwd;
                res.redirect("/index");//Se le cambiará por  vista principal
            }
            else
            {
                res.redirect("/");
            }
        });
    });
};

controlador.cerrar=(req,res)=>{
    delete req.session.usuario;
    delete req.session.passwd;

    res.redirect("/");
};

module.exports= controlador;