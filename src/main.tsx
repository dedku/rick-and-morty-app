import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import customeTheme from './lib/Theme'
import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={customeTheme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
