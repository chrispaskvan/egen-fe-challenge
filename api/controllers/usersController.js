/**
 * Created by chris on 4/24/16.
 */
module.exports.get = function(req, res) {
    var userName = req.params.userName;
    if (!userName) {
        res.status(404).end();
    }
    res.setHeader('Content-Type', 'application/json');
    res.json({
        firstName: 'John',
        lastName: 'Smith',
        userName: 'jsmith1102'
    });
};
