fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const Completed = json.reduce((acc, todo) => {
      if (todo.completed) {
        acc[todo.userId] === undefined
          ? (acc[todo.userId] = 1)
          : (acc[todo.userId] += 1);
      }
      return acc;
    }, {});
    console.log(Completed);
  })
  .catch(function(err) {
    console.log(err);
  });
