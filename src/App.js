import React, {useState, useEffect, useRef} from "react"
import TodoList from "./TodoList"
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
  const todoNameRef = useRef();

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos){
      setTodos(storedTodos)
    }
    
  },[])


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])


  function handleAddTodo(e)
  {
    let name = todoNameRef.current.value
    if(name === "") return

    setTodos(prevTodos =>{
      return [...prevTodos, {id:uuidv4(), name:name, complete:false}]
      
    } )
    todoNameRef.current.value = null
  }

  function toggleTodo(id)
  {
    let newTodos = [...todos]

    let todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function deleteCompleted()
  {
    let newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  function danielSuper()
  {
    let newTodos = [...todos]
    newTodos.map(todo => todo.name = "Daniel er superman!!!")
    setTodos(newTodos)
  }

  return (
    <>
      <input ref={todoNameRef} type="text" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded   " onClick={handleAddTodo}>Add todo</button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={danielSuper}>Daniel er super</button>
      <button className="bg-red-500 hover:bg-red  -700 text-white font-bold py-2 px-4 rounded" onClick={deleteCompleted}>Delete completed</button>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </>
  );
}

export default App;
