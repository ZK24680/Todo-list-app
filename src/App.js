
import './App.css';
import Title from './components/title';
import InputForm from './components/inputform.js';
import Filter from './components/filter';
import Todolist from './components/todolist';
import CheckallDeleteRemain from './components/checkalldeletecompleted';

function App() {
  return (
    <div className="App">
        <Title/>
        <InputForm/>
        <Filter/>
        <CheckallDeleteRemain/>
        <Todolist/>
    </div>
  );
}

export default App;
