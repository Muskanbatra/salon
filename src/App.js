import './App.css';
import { Home } from './component/Home';
import { Navbar } from './component/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { About } from './component/About';
import { Contact } from './component/Contact';
import { Home2 } from './component/Home2';
import { Service2 } from './component/Service2';
import { Footer } from './component/Footer';

function App() {
  return (
    <div>
    <BrowserRouter>
       {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home2/>}/>
          <Route path='/services' element={<Service2/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
        <Footer/>
    </BrowserRouter>
    
    </div>
  );
}


export default App;
