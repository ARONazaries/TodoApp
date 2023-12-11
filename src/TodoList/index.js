import "./TodoList.css"

function TodoList({children}) {
    return(
        <div className="parent-container">
            {children}
        </div>
    );
}

export {TodoList}
  