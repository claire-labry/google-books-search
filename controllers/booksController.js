const db = require('../models');

// methods for the bookController

module.exports = {
  // finds + displays the books
  findAll: (req, res) => {
    console.log(req.body);
    db.Book.find()
      .sort({ date: -1 })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },

  // add new books into the database
  create: (req, res) => {
    db.Book.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },

  // removes books from the database
  remove: (res, req) => {
    db.Book.remove(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },

  // updates books in the database
  update: (res, req) => {
    db.Book.update({ _id: req.params.id }, { status: req.body.status })
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
