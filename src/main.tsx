import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Page from './Page/index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Page/>
    </BrowserRouter>
  </StrictMode>,
)
