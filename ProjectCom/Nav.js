import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/home">홈으로</Link>
        <Link to="./board/Boardlist">게시판</Link>
        <Link to="./member/Login">로그인</Link>
        <Link to="./member/Register">회원가입</Link>
      </nav>
    );
  }
}

export default Nav;
