const Todos = require('../models/todo');

module.exports = {
  index,
  create,
  delete: deleteOne,
}

function index(req, res) {
  res.render('index', { Todos, id: req.params.id })
};

function create(req, res) {
  let todo = {
    done: false,
    todo: req.body.todo
  }
  Todos.push(todo);
  res.redirect('/')
}

function deleteOne(req, res) {
  console.log(req.params.id)
  const idx = Todos.findIndex(t => t.id === req.params.id);
  Todos.splice(idx, 1);
  res.redirect('/');
}