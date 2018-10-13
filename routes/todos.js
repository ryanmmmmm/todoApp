var express = require('express');
var router = express.Router();

var todosCtlr = require('../models/todos');

/* GET all todos if no ID passed, otherwise filter by ID */
router.get('/', function (req, res, next) {
  console.log('req params   ' + req.params.todoId);
  res.json(todosCtlr.getAllTODOs());
});

/* GET all todos if no ID passed, otherwise filter by ID
 TODO: not validating input right now. assumes int for ID
*/
router.get('/:todoId', function (req, res, next) {
  console.log('req params   ' + req.params.todoId);
  res.json(todosCtlr.getTodoById(req.params.todoId));
});



/* ADD a todo 
NOT IMPLEMENTED: since no database but wanted to show how this could be wired up.*/
router.post('/', function (req, res, next) {
  res.send('respond with a resource');
});


/* Edit a todo
NOT IMPLEMENTED: since no database but wanted to show how this could be wired up.
 */
router.put('/:todoId', function (req, res, next) {
  res.send('Example Edit endpoint');
});


/* DELETE a todo */
router.delete('/', function (req, res, next) {

  res.send('respond with a resource');
});

module.exports = router;
