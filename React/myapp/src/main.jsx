import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import store from './Redux/Store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
    {/* <ErrorBoundary fallback={<p>I detect the error not cracked</p>}> */}
     
    {/* </ErrorBoundary> */}
   
  </StrictMode>,
)
