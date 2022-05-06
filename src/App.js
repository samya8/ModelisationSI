import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import './App.css';
import CardList from './Components/CardList';
import Footer from './Components/Footer';
import LoginForm from './Components/LoginForm'
import Profil from './Pages/Profil';
import SchoolProfilHeader from './Components/SchoolProfilHeader';
//import DptInfo from './Pages/Formation'
import 'bootstrap';
//import {Route, Link} from 'react-router-dom';
//import DptInfo from './Pages/DptInfo';
import Formation from './Pages/Formation'
import Dpt from './Pages/Dpt';


function App() {
  return (<>
   <NavbarComp isLoggedIn={false}/>
   <div className='content-container'>

     
     
     <Formation/>
     
     
     </div>
     
    
        
       
      </>
    );
}
export default App;
