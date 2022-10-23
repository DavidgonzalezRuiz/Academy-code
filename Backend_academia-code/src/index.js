const express = require('express')
const app = express()
app.use(express.json())
const morgan = require('morgan')
const cursos = require('./rutas/pro_data.json')
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))//permitir recibir info de formularios datos simples



//configuraciones
app.set('port', process.env.PORT || 8081)
app.set('json spaces',2)
//middleware



app.use(express.json())


//API
app.use(require("./rutas/index"))

app.get('/color/:color/modelo/:modelo',(req,res)=>{
    res.send('path param /color/:color/modelo/:modelo')
})

app.post('/productos/posts',(req, res)=>{
    const {name,precio,marca} = req.body
    if(name && precio && marca){
        const id = productos.length +1
        const newproduct = {...req.body,id}
        console.log(newproduct)
        productos.push(newproduct)
        res.json(productos)
    
    }else{
        res.json('peticion erronea')
    }
    


        
})



//inicializacion o instanciacion del servidor
app.listen(app.get('port'),()=>{
    console.log(`Servidor escuchando por el puerto ${app.get('port')}`);

})

