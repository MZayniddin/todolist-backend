const { read_file, write_file } = require("../fs/fs-api");
const todosFile = "todos.json";

const Todo = {
  CREATE: (req, res) => {
    try {
      const { id } = req.user;
      const { title } = req.body;
      const allTodos = read_file(todosFile);

      allTodos.push({
        id: allTodos[allTodos.length - 1]
          ? allTodos[allTodos.length - 1].id + 1
          : 1,
        title: title,
        user_id: id,
        created_time: new Date.now(),
      });

      write_file(todosFile, allTodos);
      res.status(201).send({ message: "Todo successfully saved" });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  },
};

module.exports = Todo;
