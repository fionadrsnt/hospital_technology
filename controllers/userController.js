const {User,Profile} = require('../models')

class userController{

    static registerForm(req,res){
       res.render("registerForm")
    }

    static loginForm(req,res){
      res.render("loginForm")
   }

   static postRegister(req, res) {
      const { displayName, picture, role, gender, userId } = req.body;
      console.log(req.body);
      Profile.create({
          displayName: displayName,
          picture: picture,
          role: role,
          gender: gender,
          userId: userId
      })
      .then(newUser => {
         console.log(newUser);
          res.redirect('/login');
      })
      .catch(error => {
          res.send('Error creating profile');
      });
  }
  

}
module.exports = userController