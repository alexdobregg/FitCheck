module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'You must be logged in!');
        return res.redirect('/login');
    }
    next();
} 

module.exports.isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        req.flash('error', 'You must be an admin!');
        return res.redirect('/');
    }
    next();
} 

module.exports.isPremium = (req, res, next) => {
    if (req.user.role === 'basic') {
        req.flash('error', 'You must be a premium user!');
        return res.redirect('/');
    }
    next();
}