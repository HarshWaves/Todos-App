import { useEffect, useState } from "react";

function Todo({ todo, onDelete, updateTodo }) {
  const [isCompleted, setIsCompleted] = useState(todo.done);

  useEffect(() => console.log(todo), [isCompleted]);
  return (
    <div className="flex flex-wrap justify-between items-center bg-[#00b4d8] p-2 my-3 rounded-lg shadow-lg">
      <div className="task flex-[1_0_150px] flex gap-2 ">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => {
            updateTodo(todo);
            if (isCompleted === false) {
              setIsCompleted(true);
            } else {
              setIsCompleted(false);
            }
          }}
        />
        <h2>{todo.name}</h2>
      </div>
      <button
        className="px-4 py-1 text-sm text-[#f8edeb] rounded-sm bg-[#1d3557] hover:cursor-pointer hover:ring-2"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;


