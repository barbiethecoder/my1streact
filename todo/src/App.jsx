import { useEffect, useState } from "react"
import { Todoprovider } from "../contexts/TodoContext";
import  TodoForm from './components/Todoform';
import { TodoItem } from "./components";
function App() {
  const [todos, setTodos] = useState([]); 
//addTodo
  const addTodo = (todo)=>{
    setTodos((prev) => [{id:Date.now(), ...todo}, ...prev])
  }
  //updated Todo
  const updatedTodo = (id , todos)=>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todos: prevTodo)))
  }
//delete todo
  const deleteTodo = (id)=>{
    setTodos((prev) => prev.filter( (todos) =>todos.id!==id))
  }
//toggle complete

const toggleComplete = (id) =>{
  setTodos((prev)=>prev.map( (prevTodo) => prevTodo.id===id ?  {...prevTodo , completed: !prevTodo.completed}:prevTodo ))
}

useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem("todo"))
  if(todos && todos.length>0){
    setTodos(todos);
  }
} , [])


useEffect(()=>{
  localStorage.setItem("todos" , JSON.stringify(todos))
} , [todos])


  return (
    <Todoprovider value = {{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#000000] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Plan your things.</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm /> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
                </div>
              </Todoprovider>
  );
}

export default App
