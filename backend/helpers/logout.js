module.exports = logout = (req, res) => {
    console.log("logout request made");
    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
            if(err) {
                return next(err);
            } else {
                return res.send(200);

            }
        });
    }
}