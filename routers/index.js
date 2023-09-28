const router = require ('express').Router()
const homeController = require('../controllers/homeController')
const userController = require('../controllers/userController')
const profileController =  require('../controllers/profileController')
const formLogin = require('../controllers/formLogin')
//get Showhome
router.get('/home', homeController.ShowHome)

//get login
<<<<<<< HEAD
router.get('/login', formLogin.formLogin)
=======

router.get('/login', userController.createUser)
>>>>>>> 1a8f29776bb755a211a212da75b7dd553d9c0b0c

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




//get community post
router.get('/community', communityController.viewCommunity)

//get post content
router.get('/post', communityController.postContent)

//get form comment
router.get('/formComment', communityController.viewCommentForm)

//post comment 
router.post('/postComment',communityController.postComment)




module.exports = router