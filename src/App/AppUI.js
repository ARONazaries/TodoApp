import React, { useEffect , useState } from 'react';
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
import { AppNavbar } from '../AppNavbar';
import { Groups } from '../Groups';
import { Users } from '../Users';
import { Subjects } from '../Subjects';
import { Schedules } from '../Schedules';
import { Login } from '../Login'
import axios from 'axios';
import { Route, Routes, Navigate } from 'react-router-dom';

const API_URL_USERS = 'http://localhost:3000/api/v1/users'
const API_URL_GROUPS = 'http://localhost:3000/api/v1/groups'
const API_URL_SUBJECTS = 'http://localhost:3000/api/v1/subjects'
const API_URL_SCHEDULES = 'http://localhost:3000/api/v1/schedules'

let authToken;

// const credentials = {
//   email: 'alberto_principal@school.com',
//   password: '123456'
// }

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  withCredentials: true,
})

export function loginApi(credentials) {
  api.post('http://localhost:3000/auth/sign_in', credentials).then(response => {
    let authToken = response.data.token;
    console.log(response);
  })
}


function getAPIData(API_URL) {
  return api.get(API_URL, {
    headers: {
      'Authorization': `Bearer ${authToken}`,
    }
  }).then((response) => response.data)
}



function AppUI() {

  const [users, setUsers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [groups, setGroups] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    let mounted = true;

    if(isLoggedIn){ 
      if(users.length === 0){
        getAPIData(API_URL_USERS).then((items) => {
          if(mounted){
            setUsers(items);
          }
        })
      }
  
      if(groups.length === 0){
        getAPIData(API_URL_GROUPS).then((items) => {
          if(mounted){
            setGroups(items);
          }
        })
      }
  
      if(subjects.length === 0){
        getAPIData(API_URL_SUBJECTS).then((items) => {
          if(mounted){
            setSubjects(items);
          }
        })
      }
  
      if(schedules.length === 0){
        getAPIData(API_URL_SCHEDULES).then((items) => {
          if(mounted){
            setSchedules(items);
          }
        })
      }
    }


    

    return () => (mounted = false);
  }, []);

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

  const Home = () => {
    return (<div></div>)
  }
  
  const TodosComponent = () => {
    return (
      <div>
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
      </div>
    )
  }
  const UsersComponent = () => {
    return (
      <div>
        <h2>Users</h2>
        <Users users={users}/>
      </div>
    )
  }
  const GroupsComponent = () => {
    return (
      <div>
        <h2>Groups</h2>
        <Groups groups={groups}/>
      </div>
    )
  }
  const SubjectsComponent = () => {
    return (
      <div>
        <h2>Subjects</h2>
        <Subjects subjects={subjects}/>
      </div>
      
    )
  }

  const SchedulesComponent = () => {
    return (
      <div>
        <h2>Schedules</h2>
        <Schedules schedules={schedules}/>
      </div>
      
    )
  }

  const LoginComponent = () => {
    return (
      <div>
        <h2>Login to School Application</h2>
        <Login 
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          api={api}
        />
      </div>
    )
  }

  const protectedRoutes = [
    { path: '/', element: <Home />}, 
    { path: '/todos', element: <TodosComponent />},
    { path: '/users', element: <UsersComponent />},
    { path: '/groups', element: <GroupsComponent />},
    { path: '/subjects', element: <SubjectsComponent />},
    { path: '/schedules', element: <SchedulesComponent />},
  ]

  return (
    <React.Fragment>
      <AppHeader />
      <AppNavbar />

      <Routes>
        <Route path='/login' element={
          <LoginComponent />
          } />
        {protectedRoutes.map(({ path, element }, index) => (
          <Route
            key={index}
            path={path}
            element={isLoggedIn ? element : <Navigate to='/login' />}
          />
        ))}
      </Routes>

    </React.Fragment>
  );
}

export { AppUI };