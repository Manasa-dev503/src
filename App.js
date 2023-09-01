import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Reviews from './Reviews';

function App() {
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly ReactJS</h1>
      <Counter></Counter>
      <Todolist></Todolist>
      <Reviews></Reviews>
    </div>
  );
}

export default App;
