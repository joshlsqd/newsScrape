const db = require("../models");

module.exports = {
    createNote: function (req, res) {
        db.Note.create(req.body)
            .then(function (dbNote) {
                return db.Headline.findOneAndUpdate({_id: req.params.id}, {$push: {note: dbNote._id}}, {new: true}).populate('note');
            })
            .then(function (dbHeadline) {
                res.json(dbHeadline);
                console.log(dbHeadline);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    deleteNote: function (req, res) {
        db.Note.remove({_id: req.params.noteId})
            .then(function (dbNote) {
                return db.Headline.findOneAndUpdate({_id: req.params.headlineId}, {$pull: {note: req.params.noteId}}, {new: true}).populate('note');
            })
            .then(function (dbHeadline) {
                res.json(dbHeadline);
                console.log(dbHeadline);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    getNotes: function (req, res) {
        db.Headline.findOne({_id: req.params.id})
            .populate("note")
            .then(function (dbHeadline) {
                res.json(dbHeadline);
            })
            .catch(function (err) {
                res.json(err);
            });
    }
};