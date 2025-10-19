import { useEffect, useState } from "react";

function AddTask({ todos, onAddTask }) {
  const [inputVal, setInputVal] = useState("");

  return (
    <div className="flex flex-wrap gap-2 items-center rounded-lg mb-6 p-2 bg-[#ffafcc] shadow-lg">
      <label className="flex-[1_0_100px]" htmlFor="add-task">
        <input
          className="text-sm w-full p-2 rounded-sm outline-none focus:ring-2 ring-indigo-700"
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          id="add-task"
          placeholder="Your task here..."
        />
      </label>

      <button onClick={() => {onAddTask(inputVal); setInputVal('')}} className="text-sm bg-blue-600 text-white px-4 py-2 rounded-sm hover:cursor-pointer hover:ring-2">
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
