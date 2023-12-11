import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton';
import { AppHeader } from '../AppHeader';
import { LoadingTodos} from '../LoadingTodos';
import { ErrorTodos } from '../ErrorTodos'
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from "../Modal";
import { TodoForm } from '../TodoForm';


function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    createTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <AppHeader />
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <LoadingTodos/>}
        {error && <ErrorTodos/>}

        {(!loading && searchedTodos.length === 0)
        && <EmptyTodos/> }

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
          ))}

      </TodoList>

      {!loading && <CreateTodoButton 
        onCreate={() => createTodo()}
      />}

      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}



    </React.Fragment>
  );
}

export { AppUI };