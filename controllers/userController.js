const {User} = require('../models')

class userController{

    static createUser(req,res){
        res.render("loginForm")
     }

     static postUser(req, res) {
        const {email,password} = req.body;
        User.create({
            email: email,
            password: password,
        })
        .then(newUser => {
           console.log(newUser);
            res.redirect('/createProfile');
        })
        .catch(error => {
            res.send('Error creating User');
        });
      }


}

module.exports = userController