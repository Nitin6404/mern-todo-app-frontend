export function Todos({todos}){
    return <div>
        {todos.map(function (todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={() => {
                    const value = todo.completed;
                    todo.completed = (!value);
                }}>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
            </div>
        })}
    </div>
}
