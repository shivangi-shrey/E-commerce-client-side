
import Header from './components/header/Header'
import Pages from './components/mainpages/Pages'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/header/Navbar'
import DataProvider from './components/GlobalState'
import Footer from './components/footer/Footer'


function App() {
  return (
<DataProvider>
    <Router>
      <Header></Header>
      <Navbar></Navbar>
       <Pages></Pages> 
      <Footer></Footer>
      
    </Router>
    </DataProvider>
  )
}

export default App
