import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="./board/List">게시판</Link>
        <Link to="./member/Login">로그인</Link>
        <Link to="./member/Memberjoin">회원가입</Link>
      </nav>
    );
  }
}

export default Nav;
