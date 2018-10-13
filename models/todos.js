


const db = {
    get() {
      return [
        {id: 1, title: 'test 1', description: 'description 1'},
        {id: 2, title: 'test 2', description: 'description 2'},
      ];
    }
  }


exports.getAllTODOs = function(){
      return db.get();
}

function isTodo(todo, id) {
  console.log(todo + ' ' + todo.id + '|id' + id + ' ' + todo.id === id);
  return todo.id === id;
}

exports.getTodoById = function(id){
  console.log();
  var todo = db.get().filter(todo => isTodo(todo,id));
  return todo;
}