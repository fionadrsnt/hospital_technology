const router = require ('express').Router()
const homeController = require('../controllers/homeController')
const userController = require('../controllers/userController')
const profileController =  require('../controllers/profileController')
const formLogin = require('../controllers/formLogin')
//get Showhome
router.get('/home', homeController.ShowHome)

//get login
router.get('/login', formLogin.formLogin)

//post login
router.post('/login', formLogin.postLogin)


//get CreateRegist
router.get('/regist', userController.createUser)

//post createRegist
router.post('/regist',userController.postUser)


//get profile
router.get('/createProfile',profileController.createProfile)

//post profile
router.post('/postProfile',profileController.postProfile)








module.exports = router