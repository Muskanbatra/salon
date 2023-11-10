import './App.css';
import { Home } from './component/Home';
import { Navbar } from './component/Navbar';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Services } from './component/Services';
import { About } from './component/About';
import { Contact } from './component/Contact';

function App() {
  return (
    <div>
    <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
    </BrowserRouter>
    
    </div>
  );
}


export default App;
