import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import { Provider, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getData } from './redux/slices/dataSlice'

const router=createBrowserRouter(Routes)
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getData())
  },[])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
