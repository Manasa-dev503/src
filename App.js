import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';
import Counter from './Counter';
import Todolist from './Todolist';
import Textbox from './Textboxarray';
import Texthead from './Textboxheading';
import Textlist from './Textboxlist';
import Tododelete from './Todolistdelete';
import Objprp from './Objprp';
import Comprp from './RefactoringCompprop';
import Todolist2 from './Todolist2';
import Counter2 from './Counter2';
import Carousal from './Carousal';
import Countries from './countriesaxios';
import Products from './productsaxios'
//import Vacation from './Vacationplan';
import Counter1 from './Counter1';
import 'bootstrap/dist/css/bootstrap.css';
import Reviews from './Reviews';
import Ref from './Ref';
//import First from './First'
//import MyContext from './MyContext';
import Accordion from './Accordion';
import Shopping from './Shoppingcart';

function App() {
  //var [c,setc] = useState(10)
  return (
    <div className="mybox">
      {/*<MyContext.Provider value={100}>
        <div className='mybox'>
          <h1>Welcome to Edupoly ReactJS</h1>
          <h1>Counter::{c}</h1>
          <button onClick={()=>{setc(c+1)}}></button>
          <First>c={c}</First>
        </div>
      </MyContext.Provider>
      
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
      <Counter2></Counter2>
      <Carousal></Carousal>
      <Countries></Countries>
      <Products></Products>
      {/*<Vacation></Vacation>*/}
      <Counter1></Counter1>
      {/*<MyContext></MyContext>*/}
      <Reviews></Reviews>
      <Ref></Ref>
      <Accordion></Accordion>
      <Shopping></Shopping>
      
      
      
      </div>
      
     
      
    
  );
}

export default App;
