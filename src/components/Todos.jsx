import Todo from "./Todo";
function Todos({todos, onDelete, updateTodo}) {
    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo.sno} todo={todo} onDelete={onDelete} updateTodo={updateTodo}/>
            ))}
        </div>
    );
}

export default Todos;