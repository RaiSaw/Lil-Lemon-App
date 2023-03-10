import { ChakraProvider} from "@chakra-ui/react";
import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage"
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from './pages/ConfirmedBooking';
import About from './components/About';


function App() {
  return (
    <ChakraProvider>
    <Router>
      <Nav/>
      <div className='App'>
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/booking" element={<BookingPage/>}/>
          <Route path="/confirmation" element={<ConfirmedBooking/>} />
          <Route path="/about" component={About} />
        </Routes>
      </div>
    </Router>
    </ChakraProvider>
  )
}

export default App;
