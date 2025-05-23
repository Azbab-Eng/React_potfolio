import { StrictMode } from 'react'
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  
  <StrictMode>

    <BrowserRouter basename='/React_potfolio/'>
      <Routes>
        <Route path='*' element={<App />} />
      </Routes>
    </BrowserRouter>
    

  </StrictMode>,
)
