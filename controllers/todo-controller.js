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
        created_time: new Date().toLocaleString(),
      });

      write_file(todosFile, allTodos);
      res.status(201).send({ message: "Todo successfully saved" });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  },
  UPDATE: (req, res) => {
    try {
      const { id } = req.params;
      const { title } = req.body;
      const allTodos = read_file(todosFile);
      let changed = false;

      allTodos.forEach((todo) => {
        if (todo.id === +id) {
          todo.title = title ? title : todo.title;
          changed = true;
        }
      });

      if (changed) {
        write_file(todosFile, allTodos);
        res.status(200).send({ message: "Successfully updated!" });
      } else {
        res.status(404).send({ message: "Todo not found" });
      }
    } catch (err) {
      res.send({ message: err.message });
    }
  },
  GET: (req, res) => {
    try {
      const { id } = req.user;
      const userTodos = read_file(todosFile).filter(
        ({ user_id }) => user_id === id
      );
      res.status(200).send(userTodos);
    } catch (err) {
      res.send({ message: err.message });
    }
  },

};

module.exports = Todo;
