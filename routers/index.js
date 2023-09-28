const router = require ('express').Router()
const homeController = require('../controllers/homeController')
const userController = require('../controllers/userController')
const ProfileController =  require('../controllers/profileController')

//get Showhome
router.get('/home', homeController.ShowHome)

//get login
router.get('/login', userController.createUser)

//post login
router.post('/login',userController.postUser)

//get profile
router.get('/createProfile',ProfileController.createProfile)

//post profile
router.post('/postProfile',ProfileController.postProfile)








module.exports = router