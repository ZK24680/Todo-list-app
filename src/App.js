
import './App.css';
import Title from './components/title';
import InputForm from './components/inputform.js';
import Filter from './components/filter';
import Todolist from './components/todolist';
import CheckallDeleteRemain from './components/checkalldeletecompleted';
import { useEffect,useState } from 'react';




function App() {

  let [todo,setTodo] = useState([]);

  useEffect(()=>{

      fetch('http://localhost:3001/todo')
      .then(res => res.json())
      .then(res => {
        setTodo(res);
      })

  },[]);


  let addTodo = (newtodo)=>{

    //Server site Add
    fetch('http://localhost:3001/todo',{
      method : "POST",

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body : JSON.stringify(newtodo)
    })

    //Client Site add
    setTodo(prevState=> {
        return [newtodo,...prevState];
    })

  }


  let remainCount = todo.filter(todo=> !todo.completed).length;


  let deleteTodo = (todoId)=>{
     //Server Site Delete
      fetch(`http://localhost:3001/todo/${todoId}`,{
        method : 'DELETE',
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
  
        body : JSON.stringify(todo)

      })

     //Client Site delete
     setTodo(prevState => {


        return prevState.filter(todo => todo.id !== todoId);

     })
  }


  let updateTodo = (uptodo)=>{

    //Client Site update 
    setTodo(prevState=>{

      return prevState.map(todo=> {
          if(todo.id === uptodo.id){
              return uptodo
          }

          return todo;
      })

    })
  }




  return (
    <div className="App">
        <Title/>
        <InputForm addTodo={addTodo}/>
        <Filter/>
        <CheckallDeleteRemain remainCount={remainCount}/>
        <Todolist todos={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default App;
