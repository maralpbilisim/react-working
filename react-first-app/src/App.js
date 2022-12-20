import './App.css';
import React from 'react';
import Header from './components/Header';
import User from './components/User';

// const name="Mehmet";
// const islog=true;
// function App() {
//   return (
//     // <>
//     //   <h1>hello</h1>
//     // <Header></Header>
//     // </>
//    <React.Fragment>
    
//     <h1 className='xyz'>{islog ? `benim adım ${name}`:"kullanıcı bulunamadı"}</h1>
//     {/* {!islog && ""}<br/> */}
//     {/* <label htmlFor="myinput">aaa</label>
//     <input type="text" id='myinput'></input> */}
//   {/* <Header></Header> */}
//   </React.Fragment>
//   );
// }
const friends=[
  {
    id:1,
    name:12
  },
  {
    id:2,
    name:"tayfun"
  }, 
  {
    id:3,
    name:"gökhan"
  },   
 ];
function App() {
  return(
    <>
      <User 
      name="Mehmet" 
      surname="demir" 
      islog={true}
      friends={friends}
      />
    </>
  )
}
export default App;
