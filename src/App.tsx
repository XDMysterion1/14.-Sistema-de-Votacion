import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { Home }           from './page/Home/Home';
import { About }          from './page/About/About';
import { NotFoundPage }   from './page/NoFoundPage/NotFoundPage';

import {Login}            from './page/Login/Login';
import {Register}         from './page/Register/Register';

import {NavBar}           from './components/NavBar/NavBar';

import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        
        main: '#3f51b5',
   
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
 
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path="/"          element={<Home />}         />
          <Route path="/About"     element={<About />}        />
          <Route path="*"          element={<NotFoundPage />} />
          <Route path="/Login"     element={<Login />}        />
          <Route path="/Register"  element={<Register />}     />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
