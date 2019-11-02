module.exports = function (app) {

    //  User Routes
    app.route('/api/status')
        .get(funtion(req, res) {
            var yeet = {name: "yeetus"};
            res.send(JSON.stringify(yeet));
        })
}