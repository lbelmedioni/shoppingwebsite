import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Navbar from './components/navbar'
import Aboutus from './pages/Aboutus'


// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
      <Route path="navbar" element={<Navbar />} />
      <Route path="aboutus" element={<Aboutus />} />
      
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
