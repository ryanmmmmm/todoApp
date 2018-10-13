


const db = {
  get() {
    return [
      { id: 1, title: 'test 1', description: 'description 1' },
      { id: 2, title: 'test 2', description: 'description 2' },
    ];
  }
}


exports.getAllTODOs = function () {
  return db.get();
}

/*
Note is there are duplicated in DB then thats problem in DB, this assumes no duplicates only one match.
*/
function isTodo(todo, id) {
  console.log(id + 'isTodo' + todo.id + '' + (todo.id.toString() === id.toString()));
  return todo.id.toString() === id.toString(); 
}

/*
Converts to toString for simplicity of comparison, less data type handling.
*/
exports.getTodoById = function (id) {
  console.log(id + '||' + todos);
  var todos = db.get();
  var todoSelected = todos.find(todo => isTodo(todo,id));
  return todoSelected;
}