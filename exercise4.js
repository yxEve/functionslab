fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed1 = json.reduce( (acc, todo) => 
     todo.completed ? acc+1 : acc
,0
)
      console.log(completed1)
    })
  .catch(function(err) { 
    console.log(err);
  });