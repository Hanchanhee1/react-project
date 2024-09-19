import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './ProjectCom/Header';
import Footer from './ProjectCom/Footer';
import Nav from './ProjectCom/Nav';
import Boardlist from './board/Boardlist';
import Boardread from './board/Boardread';
import Boardupdate from './board/Boardupdate';
import Boardwrite from './board/Boardwrite';
import Login from './member/Login';
import Register from './member/Register';
import Memread from './member/Memread';
import Memupdate from './member/Memupdate';
import './Home.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Nav />
          <section>
            <Routes>
              <Route path="/board/Boardlist" element={<Boardlist />} />
              <Route path="/board/Boardread" element={<Boardread />} />
              <Route path="/board/Boardupdate" element={<Boardupdate />} />
              <Route path="/board/Boardwrite" element={<Boardwrite />} />
              <Route path="/member/Login" element={<Login />} />
              <Route path="/member/Memread" element={<Memread />} />
              <Route path="/member/Memupdate" element={<Memupdate />} />
              <Route path="/member/Register" element={<Register />} />
            </Routes>
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
