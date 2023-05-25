import { ChakraProvider} from "@chakra-ui/react";
import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage"
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from './pages/ConfirmedBooking';
import AboutUs from './pages/AboutUs';
import OnlineMenu from './pages/OnlineMenu'


function App() {
  return (
    <ChakraProvider>
    <Router>
      <Nav/>
      <main>
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="booking" element={<BookingPage/>}/>
          <Route path="confirmation" element={<ConfirmedBooking/>} />
          <Route path="about" element={<AboutUs/>} />
          <Route path="orderOnline" element={<OnlineMenu/>} />
        </Routes>
      </main>
    </Router>
    </ChakraProvider>
  )
}

export default App;
