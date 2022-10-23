const { Router } = require("express")
const router = Router()
//rutas


router.get('/',(req, res)=>{
    res.send("Pagina de inicio")
})

router.get('/acerca de nosotros',(req,res)=>{    
    res.send("Cursos disponibles")
   
})
router.get('/cursos',(req, res)=>{
    res.json(cursos)
})
module.exports= router