import React, { useState } from "react";

//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {

function App() {
  let d = new Date();
  const [getTime,setTime] = useState(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());

  function UpdateTime(){
    let d = new Date();
    setTime(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
    
  }
  setInterval(UpdateTime,1000);
  return (
    <div className="container">
      <h1>{getTime}</h1>
      <button onClick = {UpdateTime}>Get Time</button>
    </div>
  );
}


export default App;

//function App() {
  //var count = 54;
  //const state = useState(count);
  //By using destructuring of the useState return which is an array we don't have to keep dereferencing specific indexes of the array
//   const [getCount,setCount] = useState(0);
//   function increase(){
    
//     setCount(getCount+1);
//   }
//   function decrease(){
    
//     setCount(getCount-1);
//   }
//   return (
//   <div className = "container">
//   <h1>{getCount}</h1>
//   <button onClick={increase}>+</button>
//   <button onClick={decrease}>-</button>
//   </div>
//   );
// }

//export default App;
