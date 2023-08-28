import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Textbox from './Textboxarray';
import Texthead from './Textboxheading';
import Textlist from './Textboxlist';
import Tododelete from './Todolistdelete';
import Objprp from './Objprp';
import Comprp from './RefactoringCompprop';
import Todolist2 from './Todolist2';


function App() {
  return (
    <div className="mybox">
      <h1>ReactJS</h1>
      {/*<img src="/logo192.png"/>*/}
      <img src="/Images/logo192.png"/>
      <Counter s={100} i={10}></Counter>
      <Counter s={200} i={20}></Counter>
      <Todolist></Todolist>
      <Textbox></Textbox>
      <Texthead></Texthead>
      <Textlist></Textlist>
      <Tododelete></Tododelete>
      <div className='box'>
      <Objprp name="Mumbai Indians" list={["Rohit","surya","Kishan","Bhumra","david"]}></Objprp>
      </div>
      <div className='box'>
      <Objprp name="Royal Challenger Bengaluru" list={["Faf","virat","DK","Maxi","Siraj"]}></Objprp>
      </div>
      <div className='box'>
      <Objprp name="Sunrises Hyderabad" list={["Kane Williamson","Manish","Bhuvi","Warner","Karan"]}></Objprp>
      </div>
      <div className='box'>
      <Objprp name="Chennai Super Kings" list={["Dhoni","Raina","Jadeja","Rayudu","Ben Stokes"]}></Objprp>
      </div>
      <Comprp></Comprp>
      <Todolist2></Todolist2>
      </div>
      
     
      
    
  );
}

export default App;
