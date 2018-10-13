var express = require('express');
var router = express.Router();

var todosCtlr = require('../models/todos');

/* GET todos listing. */
router.get('/todos', function(req, res, next) {

  res.json(todosCtlr.getAllTODOs());
});


/* GET todos listing. */
router.get('/:todoId', function(req, res, next) {
  console.log( 'kkkkk   ' + req.params.todoId);
  var todo = todosCtlr.getTodoById( req.params.todoId)
  res.json(todo);
});



/* ADD a todo 
NOT IMPLEMENTED: since no database but wanted to show how this could be wired up.*/
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* Edit a todo
NOT IMPLEMENTED: since no database but wanted to show how this could be wired up.
 */
router.put('/:todoId', function(req, res, next) {
  res.send('respond with a resource');
});


/* DELETE a todo */
router.delete('/', function(req, res, next) {

  res.send('respond with a resource');
});

module.exports = router;
