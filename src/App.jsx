import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

async function fetchTodos(){
  try {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    const todosArray = data.todos || [];

    return todosArray;
  }catch(error){
    console.error("Error white fetching :", error);
    throw error;
  }
}

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
      const fetchData = async function (){
      try {  
        const data = await fetchTodos();
        setTodos(data);
      }
      catch(error){
        console.error("Error from App : ", error);
      }
    }
    fetchData();
  }, [])
  return (
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos = {todos}></Todos>
      </div>
  )
}

export default App
