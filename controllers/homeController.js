const {User,Profile} = require('../models')

class homeController {

    static ShowHome(req,res){
        res.render('home')
    }


}
module.exports = homeController

