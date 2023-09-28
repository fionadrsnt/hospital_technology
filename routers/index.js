const router = require('express').Router()
const homeController = require('../controllers/homeController')
const userController = require('../controllers/userController')
const ProfileController =  require('../controllers/profileController')
const communityController = require('../controllers/communityController')


//get Showhome
router.get('/home', homeController.ShowHome)

//get login
router.get('/loginForm', userController.createUser)

//post login
router.post('/loginForm',userController.postUser)

//get profile
router.get('/createProfile',ProfileController.createProfile)

//post profile
router.post('/postProfile',ProfileController.postProfile)




//get community post
router.get('/community', communityController.viewCommunity)

//get post content
router.get('/post', communityController.postContent)

//get form comment
router.get('/formComment', communityController.viewCommentForm)

//post comment 
router.post('/postComment',communityController.postComment)



module.exports = router