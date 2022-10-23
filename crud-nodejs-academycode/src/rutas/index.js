const { Router } = require("express")
const router = Router()
const cursos = require('../pro_data.json')

router.get('/cursos', (req , res) => {
    res.json(cursos)  //el servidor envia un obj json
})
router.post('/cursos/crear', (req , res) => {
   const {id,curso,precio,profesor,duracion}= req.body
   if ( precio && profesor && duracion){       
       const newproduct = {...req.body, id}
       console.log(newproduct);
       cursos.push(newproduct)
       res.json(cursos)
   }else{
   res.json('Peticion erronea')
   }
})

module.exports = router