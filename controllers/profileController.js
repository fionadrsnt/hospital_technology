const {Profile} = require('../models')

class userController{

    static createProfile(req,res){
       res.render("createProfile")
    }

   static postProfile(req, res) {
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
          res.redirect('/home');
      })
      .catch(error => {
          res.send('Error creating profile');
      });
  }
  

}
module.exports = userController