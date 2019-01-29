const model = require ('../database/model.js');

module.exports = {
  get: (req, res) => {
    console.log('get is working');
    const { listName } = req.query;
    model.Todo.findAll({
      where: {
        list_name: listName
      }
    })

    .then( todos => {
        res.status(200).send(todos)
    })

    .catch(err => res.status(404).send(err))
  },

  post: (req, res) => {
    console.log('post is working');
    const { todo, listName } = req.body;
    model.Todo.create({
      todo: todo,
      list_name: listName
    })

    .then(() => {
      res.status(201).end();
    })

    .catch(err => {
      res.status(404).send(err)
    })
  },

  delete: (req, res) => {
    console.log('delete is working');
    const { index } = req.query;
    model.Todo.destroy({
      where: {id: index}
    })

    .then(() => {
      res.status(202).end();
    })

    .catch(err => {
      res.status(404).send(err);
    })
  }
  
}