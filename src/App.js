import './App.css';
import Navbar from './Navbar';
import Counter from './counterstart';
import NextCounter from './NextCounter';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const App = () => {
  const router = createBrowserRouter([
    
    {
      path :'/',
      element :<><Navbar/><Counter/></>,
    },
    {
      path :'/NextCounter',
      element :<><Navbar/><NextCounter/></>,
    },
  ])
  return (
    <div>
      <><RouterProvider router= {router}/></>
    </div>
  )
}

export default App
