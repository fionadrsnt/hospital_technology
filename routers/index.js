const router = require ('express').Router()
const ProfileController =  require('../controllers/profileController')
const homeController = require('../controllers/homeController')


//get Showhome
router.get('/home', homeController.ShowHome)

//get profile
router.get('/createProfile',ProfileController.createProfile)

//post profile
router.post('/postProfile',ProfileController.postProfile)







module.exports = router