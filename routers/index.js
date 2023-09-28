const router = require ('express').Router()
const ProfileController =  require('../controllers/profileController')
const homeController = require('../controllers/homeController')
const communityController = require('../controllers/communityController')


//get Showhome
router.get('/home', homeController.ShowHome)

//get profile
router.get('/createProfile',ProfileController.createProfile)

//post profile
router.post('/postProfile',ProfileController.postProfile)



//get community post
router.get('/community', communityController.viewCommunity)

//get tampilan form comment
router.get('/formComment', communityController.viewCommentForm)

//post isi dari form comment
router.post('/formComment', communityController)


module.exports = router