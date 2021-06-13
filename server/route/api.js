const router=require('express').Router()
const employe=require('../controllers/employeControler')
router.post('/addEmploye',employe.addEmploye)
router.get('/checkPermition/:mail/:password',employe.checkPermition)
router.get('/getAllEmploye',employe.getAllEmploye)
module.exports=router