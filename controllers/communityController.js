const {User,Profile} = require('../models')

class communityController {
    
    static viewCommunity(req,res){
        res.render('community')
    }

    
}

module.exports = communityController