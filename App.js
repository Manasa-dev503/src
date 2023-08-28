import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Textbox from './Textboxarray';
import Texthead from './Textboxheading';
import Textlist from './Textboxlist';
import Tododelete from './Todolistdelete';

function App() {
  return (
    <div className="mybox">
      <h1>ReactJS</h1>
      <Counter s={100} i={10}></Counter>
      <Counter s={200} i={20}></Counter>
      <Todolist></Todolist>
      <Textbox></Textbox>
      <Texthead></Texthead>
      <Textlist></Textlist>
      <Tododelete></Tododelete>
    </div>
  );
}

export default App;
