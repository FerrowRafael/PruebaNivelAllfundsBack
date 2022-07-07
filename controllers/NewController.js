const New = require('../models/New');
const NewJson = require('../data/News.json');


const NewController = {

    // NewS ALL
    all(req, res) {
        New.find({ archiveDate: { $exists: false } })
            .sort({ 'date': -1 }).limit(10)
            .then(data => {
                res.status(200);
                res.json(data);
            })
            .catch(err => {
                res.status(500);
                res.json(`"error": ${err}`);
            })
    },

    archived(req, res) {
        New.find({ archiveDate: { $exists: true } })
            .sort({ 'archiveDate': -1 }).limit(10)
            .then(data => {
                res.status(200);
                res.json(data);
            })
            .catch(err => {
                res.status(500);
                res.json(`"error": ${err}`);
            })
    },

    get(req, res) {
        let id = req.params.newId;
        New.findById(id)
            .then(data => {
                res.status(200);
                res.json(data);
            })
            .catch(err => {
                res.status(500);
                res.json(`"error": ${err}`);
            });
    },

    update(req, res) {
        let id = req.params.newId;
        New.findByIdAndUpdate(id, { archiveDate: Date.now() })
            .then(order => res.status(201).send({ message: "New has been Update", order }))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    delete(req, res) {
        let id = req.params.newId;
        New.findByIdAndDelete(id)
            .then(order => res.status(201).send({ message: "New has been delete" }))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    add(req, res) {
        New.create(NewJson)
            .then(category => res.status(201).send(category))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    }

}

module.exports = NewController;