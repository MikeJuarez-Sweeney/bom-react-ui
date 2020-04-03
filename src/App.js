import React from 'react'
import bomTheme from './themeConfig'
import MainPage from './components/MainPage'
import './App.css'
import 'typeface-roboto'
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={bomTheme}>
        <MainPage />
      </ThemeProvider>  
    </BrowserRouter>
  );
}

export default App
