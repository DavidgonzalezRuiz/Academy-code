const { Router } = require("express")
const router = Router()
//rutas
router.get('/',(req, res)=>{
    res.send({"nombre":"Mause"})
})
module.exports= router