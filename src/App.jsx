
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [todos,setTodos] = useState([])
   
  const getData = () =>{
     //https://dummyjson.com/todos

    fetch('https://dummyjson.com/todos')
    .then((rawData) => rawData.json())
    .then((response) => setTodos(response.todos))
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    getData();
    
  }, [])
  

  return (
    <>
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>todo</th>
          <th>Completed</th>
          <th>User Id</th>
          
        </tr>
      </thead>

      <tbody>
        {
          todos.map((rec) => (
            <tr key={rec.id}>
              <td>{rec.id}</td>
              <td>{rec.todo}</td>
              <td>{rec.completed? 'Yes' : 'No'}</td>
              <td>{rec.userId}</td>
            </tr>
          ))
        }

      </tbody>
    </table>
      
    </>
  )
}

export default App
