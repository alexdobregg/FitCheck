module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'You must be logged in!');
        return res.redirect('/login');
    }
    next();
} 

module.exports.isAdmin = (req, res, next) => {
    if (!(req.user.role === 'admin')) {
        req.flash('error', 'You must be logged in!');
        return res.redirect('/login');
    }
    next();
} 