const router = require ('express').Router()
const userController =  require('../controllers/userController')
const homeController = require('../controllers/homeController')

//get Showhome
router.get('/home', homeController.ShowHome)

//get register
router.get('/', userController.registerForm)
//post register
router.post('/login', userController.postRegister)

//get login
router.get('/login', userController.loginForm)






module.exports = router