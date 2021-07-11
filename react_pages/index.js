import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

let currDate = new Date(2021,3,3,22);
let curDate = currDate.getHours();
let curTime = currDate.toLocaleTimeString();
const cssStyle ={ };

let greeting ='';

if(curDate >= 1 && curDate < 12){
  greeting = "Good Morning";
  cssStyle.color = "green";
}else if(curDate >= 12 && curDate < 16){
  greeting = "Good Afternoon";
  cssStyle.color = "blue";
}else if(curDate >= 16 && curDate < 19){
  greeting = "Good Evening";
  cssStyle.color = "red";
}else{
  greeting = "Good Night";
  cssStyle.color = "teal";
}



ReactDOM.render(
<>
<div>
  <h1>Hello Sir,
<span style = {cssStyle}>{greeting}</span> {curTime} </h1>
  </div>
  </>,
  document.getElementById('root')
  
  
);