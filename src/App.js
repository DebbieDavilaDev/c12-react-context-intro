import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from './components/Footer';
import './App.css';

import Login from './pages/Login';

export const UserContext = createContext()

function App() {
  const [userState, setUserState] = useState({})

  const user = {
    userName: 'joedoe@gmail.com',
    accountType: 'admin',
    _id: '1234678'
  }

  console.log('userState in app ->', userState)
  return (
    <BrowserRouter>
      <UserContext.Provider value={{userState, setUserState}}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
        </UserContext.Provider>
    </BrowserRouter>
  )
}



export default App;
