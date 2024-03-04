import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Campaign from './components/Campaigns'
import Donations from './components/Donations'
import News from './components/News'
import Programs from './components/Programs'
import AddProgram from './components/AddProgram'
import Page from './components/esewa/Page'
import EsewaSuccess from './components/esewa/EsewaSuccess'

function App() {

  return (
    <>

<BrowserRouter>
<Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/aboutus" element={<Aboutus/>}></Route>
    <Route path='/campaigns' element={<Campaign/>}></Route>
    <Route path='/donations' element={<Donations/>}></Route>
    <Route path='/news' element={<News/>}></Route>
    <Route path='/programs' element={<Programs/>}></Route>
    <Route path='/addprograms' element={<AddProgram/>}></Route>
    <Route path='/esewa' element={<Page/>}></Route>
    <Route path='/success' element={<EsewaSuccess/>}></Route>
    

  </Routes> 
 
</BrowserRouter>




   

  
    </>
  )
}

export default App
