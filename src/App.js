
import './App.css';
import Title from './components/title';
import InputForm from './components/inputform.js';
import Filter from './components/filter';
import Todolist from './components/todolist';
import CheckallDeleteRemain from './components/checkalldeletecompleted';
import { useCallback, useEffect,useState } from 'react';




function App() {

  let [todo,setTodo] = useState([]);

  let [filterTodo,setFilterTodo] = useState(todo);

  useEffect(()=>{

      fetch('http://localhost:3001/todo')
      .then(res => res.json())
      .then(res => {
        setTodo(res);
        setFilterTodo(res);
      })

  },[]);


  let filterfunction = useCallback(filter =>{

    if(filter === 'All'){
      setFilterTodo(todo);
    }

    if(filter === 'Completed'){
      setFilterTodo(todo.filter(todo=> todo.completed));
    }

    if(filter === 'Todo'){
      setFilterTodo(todo.filter(todo=> !todo.completed));
    }

  },[todo])




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
        return [...prevState,newtodo];
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
  
        

      })

     //Client Site delete
     setTodo(prevState => {


        return prevState.filter(todo => todo.id !== todoId);

     })
  }


  let updateTodo = (uptodo)=>{

    //Server Site Update
    fetch(`http://localhost:3001/todo/${uptodo.id}`,{
      method : 'PATCH',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body : JSON.stringify(uptodo)

    })

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

  let checkAll = (todos)=>{

    // Server site update
    todos.forEach(uptodo => {

      updateTodo(uptodo);
        

    });
    //Client site update
    setTodo(todos);

  }

  let deleteComplete = (delTodos)=>{


      delTodos.forEach(deltodo=>{
        deleteTodo(deltodo.id);
      })
  }




  return (
    <div className="App">
        <Title/>
        <InputForm addTodo={addTodo}/>
        <Filter filterfunction={filterfunction}/>
        <CheckallDeleteRemain remainCount={remainCount} todo={todo} checkAll={checkAll} deleteComplete={deleteComplete}/>
        <Todolist todos={filterTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
