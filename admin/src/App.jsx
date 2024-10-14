import React from 'react'
import Navcomponent from './components/navbar/Navcomponent';
import Adminpages from './pages/adminpages/Adminpages';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
const App = () => {
  return (
    <div>
      <Navcomponent/>
      <Adminpages/>
      <ToastContainer/>
    </div>
  )
}

export default App;