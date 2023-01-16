import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from './components/ConfirmedBooking';

class AvailableTimes extends React.Component{
    constructor(props){
      super(props);
      this.handleChange.bind(this);
      this.state ={temp:''};
    }
    handleChange(e){
      this.setState({temp:e.target.value})
    }
    render(){
      return;
    }
}

function App() {
  return (
    <Router>
      <Nav/>
      <div className='app'>
        <Routes> 
          <Route path="/" element={<Homepage/>}/>
          <Route path="/confirmation" component={ConfirmedBooking} />
          <Route path="/booking" element={<BookingPage/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
