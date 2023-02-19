import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cycle from'./cycle';
import reportWebVitals from './reportWebVitals';







//import React, { Component } from 'react'

// export class index extends Component {
//   render() {
//     return (
//       <div>
//         <h1>vaasnrh</h1>

//       </div>
//     )
//   }
// }

// export default index













const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Cycle/>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
