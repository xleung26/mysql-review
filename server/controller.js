const db = require("../database/models.js");

module.exports = {
  get: (req, res) => {
    const { listName } = req.query;
    db.Todo.findAll({
      where: {
        list_name: listName
      }
    })
      .then(todos => {
        if (todos) {
          res.status(200).send(todos);
        } else {
          res.status(404).send("List not found");
        }
      })
      .catch(err => res.status(404).send(err));
  },
  post: (req, res) => {
    const { todo, listName } = req.body;
    db.Todo.create({
      todo: todo,
      list_name: listName
    })
      .then(todo => {
        res.status(201).send("todo created");
      })
      .catch(err => {
        res.status(404).send(err);
      });
  },
  delete: (req, res) => {
    const { index } = req.query;
    console.log(index);
    db.Todo.destroy({
      where: { id: index }
    })
      .then(() => {
        res.status(202).send("Todo deleted");
      })
      .catch(err => {
        res.status(404).send(err);
      });
  }
};
