const express = require('express')
const app = express()
const morgan = require('morgan')
const productos = require('./rutas/pro_data.json')
//configuraciones
app.set('port', process.env.PORT || 8081)
app.set('json spaces',2)
//middleware
app.use(morgan('dev'))
app.use(express.json())//permite al servidor recibir y entender datos json
app.use(express.urlencoded({extended:false}))//permitir recibir info de formularios datos simples
app.get('/productos',(req, res)=>{
    res.json(productos)
})

//rutas




//API
app.get('/',(req,res)=>{
    res.send('ruta para la operacion leer')
})
app.get('/:color/:modelo',(req,res)=>{
    const color = req.params.color
    const modelo = req.params.modelo
    res.send(`/${color}/${modelo}`)
   
})
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

