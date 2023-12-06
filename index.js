import React from 'react';
import ReactDOM from 'react-dom';

// arrow is short syntax for function and saves writing code.

// arrow example using const variable
const a = () =>{
  const a = "Bharanidharan sir";
  const b = "Yogesh";
  const c = "Viraj";
  const d= "Megha";

  let message= "The CEO and our tutor of Hubsem Software solutions is" +a+  "Also the students in our class are " +b+  "and" +d;
  document.getElementById('root').innerHTML= message;


}




// using variable outside the if condition with arrow function

var s = () => {
  
  var n= "Viraj";
  var e= "Yogesh";
  let message1="Our Class students in Hubsem Software Solutions are "+n+ "and" +e;

  if (n==="Viraj"){
    var n= "Bharanidharan sir";
  }

  document.getElementById('root').innerHTML=n;
}

 


//  variable declare inside the if condition block with arrow function

var f = () =>{

  var e="Viraj";
  if(e === "Viraj"){
    
    let e="CEO";
    document.getElementById('root').innerHTML= e;
  }
}

s();
f()
a();



