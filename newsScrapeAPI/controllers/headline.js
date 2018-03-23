const db = require("../models");

module.exports = {
    getArticles: function (req, res) {
        db.Headline.find().populate('note')
            .then(function (dbHeadline) {
                res.json(dbHeadline);
            })
            .catch(function (err) {
                res.json(err);
            });
    },


    updateArticleSave: function (req, res) {
        db.Headline.findOneAndUpdate({_id: req.params.headlineId}, req.body, {new: true})
            .then(function (dbHeadline) {
                // console.log(dbHeadline);
                res.json(dbHeadline);
            })
            .catch(function (err) {
                res.json(err);
            });
    }
};