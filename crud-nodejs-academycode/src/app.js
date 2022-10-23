const express = require('express')
const app = express()
const puerto = 8080
const morgan = require('morgan')



//Setting
app.set('puerto' , process.env.PORT || 8080)
app.set('json spaces', 2)


//middleware : funciones que prosesan datos antes de ir al servidor
app.use(express.json())

app.use(express.urlencoded({extended: false}))

//crud

app.use(require('./rutas/index'))

const cursos = require('./pro_data.json')

app.listen(app.get('puerto'), () => {
    console.log(`servidor en el puerto ${puerto}`)
})
