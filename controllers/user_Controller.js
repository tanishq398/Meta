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