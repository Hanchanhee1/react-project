import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './ProjectCom/Header';
import Footer from './ProjectCom/Footer';
import Nav from './ProjectCom/Nav';
import List from './board/List';
import Boardread from './board/Boardread';
import Boardupdate from './board/Boardupdate';
import Write from './board/Write';
import Login from './member/Login';
import Memberjoin from './member/Memberjoin';
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
              <Route path="/board/List" element={<List />} />
              <Route path="/board/Boardread" element={<Boardread />} />
              <Route path="/board/Boardupdate" element={<Boardupdate />} />
              <Route path="/board/write" element={<Write />} />
              <Route path="/member/Login" element={<Login />} />
              <Route path="/member/memberjoin" element={<Memberjoin />} />
            </Routes>
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
