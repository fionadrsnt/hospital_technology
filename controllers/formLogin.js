const { User } = require('../models')

class formLogin{
    static formLogin(req,res){
        const { error } = req.query
        res.render("formLogin", { error })
    }
    
    static postLogin(req, res) {
        const {email, password} = req.body
        User.findOne({where:{email}}) //! cari user ada atau tidak
        .then((user) => {
            if (user) { // cek user
                const isValid = bcrypt.compareSync(password, user.password)
                if (isValid) { //! cek password
                    req.session.UserId = user.id //? req.session.bebasNamanya, ini untuk pengecekan user sedang login atau tidak
                    return res.redirect("/home") // kalau email dan password benar
                } else {
                    const error = "Invalid email/password" 
                    return res.redirect(`/login?error=${error}`) //! kalau password salah
                }
            } else {
                const error = "Invalid email/password" 
                return res.redirect(`/login?error=${error}`) //! kalau email salah
            }
        })
        .catch((err) => {
            res.send(err)
        })
    }

}
module.exports =  formLogin