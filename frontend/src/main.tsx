// src/main.tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import esES from 'antd/locale/es_ES'
import 'antd/dist/reset.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        locale={esES}
        theme={{
          token: {
            colorPrimary: '#4f46e5',
            borderRadius: 8,
            fontFamily: 'Segoe UI, system-ui, sans-serif',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
)