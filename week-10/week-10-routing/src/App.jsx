import { useState } from "react";
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App(){

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={ <Landing /> } />
          <Route path="/neet/online-coaching-class-11" element={ <Class11Program /> } />
          <Route path="/neet/online-coaching-class-12" element = { <Class12Program /> } />
          <Route path="*" element = {<ErrorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

function Landing(){
  return <div>
    Welcome to Allen
  </div>
}

function Layout(){
  return <div style={{height: "100vh", background: "blue"}}>

    <Link to="/"> Allen </Link> | 
    <Link to="/neet/online-coaching-class-11">Class 11</Link> | 
    <Link to="/neet/online-coaching-class-12">Class 12</Link>

    <div style={{height: "90vh", background:"red"}}>
      <Outlet />
    </div>

    Footer | Contact us
    
  </div>
}

function ErrorPage(){
  return <div> 
    ERROR - ROUTE DOES NOT EXISTS
  </div>
}

function Class11Program(){
  return <div>
    NEET programs for Class 11th
  </div>
}

function Class12Program(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/");
  }
  return <div>
    NEET programs for Class 12th
    <button onClick={redirectUser}> Go Back To Landing Page </button>
  </div>
  
  {/*. Link approach - 
  return <div>
    NEET Programs for Class 12th
    
    <Link to="\">
      <button>Take back to the landing page </button>
    </Link>
    
  </div>
  */}

}

export default App

// 
//  below is some useRef notes
// reference to a value, such that when u change the value, the component DOES NOT RE-RENDERS but the changed value is stored in it

// function App(){
//     const inputRef = useRef();

//     function focusOnInput(){
//         inputRef.current.focus();
//     }

//     return <div>
//         Sign up
//         <input ref={inputRef} type={"text"}></input>
//         <input type={"text"}></input>
//         <button onClick={focusOnInput}>Submit</button>
//     </div>
 
// }

// export default App

