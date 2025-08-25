import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './containers/App'
import Practice from './Practice/Practice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practice/> */}
  </StrictMode>,
)
