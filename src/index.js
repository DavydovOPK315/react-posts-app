import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

ReactDOM.render(
  //component
  <App />,

  // 1 
  // <div>Hellodsfs</div>,

  // 2 
  // React.createElement('button', {
  //   disabled: false,
  //   onClick: () => console.log('Pressed') 
  // }, "Press on me"),
  
  document.getElementById('root')
);