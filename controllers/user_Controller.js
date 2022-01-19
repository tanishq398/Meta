const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}

module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Meta | Sign-up"
    });
}

module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Meta | Sign-in"
    });
}


//getting the sign-up data
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    } 
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}
        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating while creation'); return}

                return res.redirect('/users/Sign-in');
            })
        }
        else{
            return res.redirect('back');
        }
    });
}

// Sign in and create a session for the user
module.exports.createSession = function(req, res){

}