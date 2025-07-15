import { useEffect,useState,memo } from 'react'
import './App.css'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counter'

function App(){

  return <div>
    <RecoilRoot>
      <Buttons />
      <Counter />
      <IsEven />
    </RecoilRoot>
  </div>

}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c+2)
  }

  function decrease() {
    setCount(c => c-1)
  }

  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Counter() {

}

function isEven() {

}

export default App
