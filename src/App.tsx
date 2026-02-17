import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.tsx'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={""}/>
        <Route path='' element={""}/>
      </Route>
    </Routes>
  )
}

export default App
