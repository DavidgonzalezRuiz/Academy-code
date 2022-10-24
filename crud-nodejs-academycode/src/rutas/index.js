const { Router } = require("express")
const router = Router()
const cursos = require('../pro_data.json')
//LEER
router.get('/cursos', (req , res) => {
    res.json(cursos)  //el servidor envia un obj json
})
//crear
router.post('/cursos/crear', (req , res) => {
   const {id,curso,precio,profesor,duracion}= req.body
   if (id){       
       const newproduct = {...req.body, id}
       console.log(newproduct);
       cursos.push(newproduct)
       res.json(cursos)
   }else{
   res.json('Peticion erronea')
   }
})
//actulizarr
router.put('/cursos/actualizar/:id',(req,res)=>{
    const cursoAcutualizado = req.body;
    const id = req.params.id
    const indice = cursos.findIndex(cursos => cursos.id === id);
if(indice>= 0){
    cursos[indice] = cursoAcutualizado;
}
res.json(cursos)
})
//eliminar
router.delete('/cursos/eliminar/:id',(req,res)=>{
    const id =req.params.id
    const indice = cursos.findIndex(cursos => cursos.id == id);
    
        cursos.splice(indice, 1);
        
        res.json(cursos)
})
module.exports = route