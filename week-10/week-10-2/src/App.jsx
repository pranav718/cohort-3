import './App.css'
import { useState, createContext, useContext } from 'react'; // Import useState from react

const BulbContext = createContext();

function BulbProvider({ children }){
  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn
    }}>
    {children}
  </BulbContext.Provider>
}

function App() {
 
  return <div>
    <BulbProvider>
      <Light />
    </BulbProvider>
  </div>
  
}

function Light(){

  return <div>
    <LightBulb/>
    <LightSwitch/>
  </div>

}

function LightBulb(){       // instead of taking props and then afterwards writing props.bulbOn, we can directly taking the argument in the given way
  const { bulbOn } = useContext(BulbContext);
  return <div>
    {bulbOn ? "bulb on": "bulb off"}
  </div>
}

function LightSwitch(){
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  function toggle(){
    //setBulbOn((currentState) => !currentState);
    setBulbOn(!bulbOn);
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

/*
const CountContext = createContext();

function CountProvider({ children }){
    const [count, setCount] = useState(0);

    return <CountContext.Provider value={{
        count: count,
        setCount: setCount
    }}>
    {children}
    </CountContext.Provider>
}

function Increase(){
    const { setCount } = useContext(CountContext);
    return <div>
        <button onClick={()=> setCount((count)=>(count+1))}>Increase</button>
    </div>
}

function Decrease(){
    const { setCount } = useContext(CountContext);
    return <div>
        <button onClick={()=> setCount((count)=>(count-1))}>Decrease</button>
    </div>
}

function Value(){
    const { count } = useContext(CountContext);
    return <div>
        Count: { count }
    </div>
}

function App(){
    return <div>
        <CountProvider>
            <Increase/>
            <Decrease/>
            <Value/>
        </CountProvider>
    </div>
}
*/

export default App;
