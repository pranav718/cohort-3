import './App.css'
import { useEffect, useState } from 'react'
import { usePostTitle, useFetch } from './hooks/useFetch'

function App() {
  const { finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/1")

  return (
    <div>
      {JSON.stringify(finalData)}
    </div>
  )
}

export default App
