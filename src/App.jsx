import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState(loadTodos());

  function handleDelete(todoToDelete) {
    setTodos(todos.filter((t) => t !== todoToDelete));
  }

  function addTask(taskName) {
    if (taskName.trim() === "") return;

    
    const newTask = {
      sno: todos.length > 0? Math.max(...todos.map((t) => t.sno)) + 1 : 1,
      name: taskName,
      done: false,
    };
    

    setTodos([...todos, newTask]);
  }

  function updateTodo(todo) {
    setTodos(
      todos.map((t) => {
        if (t === todo) return { ...todo, done: !todo.done };
        else return t;
      })
    );
  }

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  function loadTodos() {
    const todos = localStorage.getItem("my-todos");
    if (todos) {
      const parsedTodos = JSON.parse(todos);
      return parsedTodos;
    }
    return [
          { sno: 1, name: "Study", done: false },
          { sno: 2, name: "Exercise", done: false },
          { sno: 3, name: "Sleep", done: false },
        ];
  }

  function saveTodos(todos) {
    localStorage.setItem("my-todos", JSON.stringify(todos));
  }

  return (
    <div className="w-full max-w-sm p-4 pt-2 rounded-lg shadow-[#1d3557]/40 shadow-lg bg-[#cdb4db]">
      <Header />
      <AddTask todos={todos} onAddTask={addTask} />
      <Todos todos={todos} onDelete={handleDelete} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
