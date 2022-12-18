import './App.css';
import React from 'react';
import Header from './components/Header';

const name="Mehmet";
const islog=true;
function App() {
  return (
    // <>
    //   <h1>hello</h1>
    // <Header></Header>
    // </>
   <React.Fragment>
    <h1 className='xyz'>{islog ? `benim adım ${name}`:"kullanıcı bulunamadı"}</h1>
    {/* {!islog && ""}<br/> */}
    {/* <label htmlFor="myinput">aaa</label>
    <input type="text" id='myinput'></input> */}
  {/* <Header></Header> */}
  </React.Fragment>
  );
}

export default App;
