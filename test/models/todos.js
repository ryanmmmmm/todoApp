var assert = require('assert');

var todosCtlr = require('../../models/todos');

describe('getTodoById Valid Id', function() {
  describe('#getTodoById()', function() {
    var firstItemId = todosCtlr.getAllTODOs()[0];
    var getIdTodo = todosCtlr.getTodoById(1);
    console.log(todosCtlr.getTodoById(1));
    it('should return todo for the given ID of the todos list', function() {
      assert.equal(getIdTodo.id,firstItemId.id );
    });
  });
});


