import React from 'react'
import bomTheme from './themeConfig'
import MainPage from './components/MainPage'
import './App.css'
import 'typeface-roboto'
import { ThemeProvider } from '@material-ui/core'

function App() {
  return (
    <ThemeProvider theme={bomTheme}>
      <MainPage />
    </ThemeProvider>  
  );
}

export default App
