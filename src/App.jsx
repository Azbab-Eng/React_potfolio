import React from 'react'
import Home from './Components/homeCom/home'
import Resume from './Components/Resume/Resume'
import Header from './Components/Header/Header'
import Team from './Components/Teams/Team'
import Contact from './Components/Contacts/contact'
import Service from './Components/services/Service'
function App() {
  return (
    <>
    <Header/>
      <Home/>
      <Service/>
      <Resume/>
      <Team />
      <Contact />
    </>
  )
}

export default App
