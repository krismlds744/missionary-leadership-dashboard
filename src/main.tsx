import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AppErrorBoundary from './components/ui/AppErrorBoundary'
import { AuthProvider } from './context/AuthContext'
import { applyTheme, getTheme } from './utils/theme'

applyTheme(getTheme())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppErrorBoundary>
      <HashRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </HashRouter>
    </AppErrorBoundary>
  </StrictMode>,
)