import './App.css'
import { Route,Routes } from "react-router-dom";
import LandingPage  from "./pages/LandingPage";
import  ResumeGenerator  from "./pages/ResumeGenerator";
import  UserForm  from "./pages/UserForm";
import  History  from "./pages/History";
import  ViewResume  from "./pages/ViewResume";
import  Pnf  from "./pages/Pnf";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/resume' element={<ResumeGenerator/>} />
        <Route path='/form' element={<UserForm/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/resume/:id/view' element={<ViewResume/>} />
        {/* Dynamic URL are prefix with column and dynamic value will be stored in variable after colon eg. :id */}
        <Route path='/*' element={<Pnf/>} />
        
      </Routes>
    <Footer/>
      
      
    </>
  )
}

export default App
