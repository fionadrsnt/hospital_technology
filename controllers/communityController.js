const {User,Profile} = require('../models')

class communityController {
    
    static viewCommunity(req,res){
        res.render('community')
    }

    static viewCommentForm(req,res){
        res.render('formComment')
        
    }
    static postContent(req, res){
    }
    static postComment(req,res){
    }
    



}

module.exports = communityController