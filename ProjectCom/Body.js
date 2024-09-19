import React, { Component } from 'react';
import '../Home.css';

class Body extends Component {
  render() {
    return (
  //       <c:choose>
	// 	<c:when test="${sessionScope.id != null }">
	// 		<a href="/project/member/logout">로그아웃</a>
	// 		<a href="/project/member/memread?id=${sessionScope.id}&state=READ">마이페이지</a>
	// 	</c:when>
	// 	<c:otherwise>
	// 		<a href="/project/member/login">로그인</a>
	// 		<a href="/project/member/memberjoin">회원가입</a>
	// 	</c:otherwise>
	// </c:choose>
	<section>
		<h2>스프링 프레임워크를 이용한 게시판 만들기 프로젝트 입니다..</h2>
		{/* <H3 style="text-align:center;"><%= session.getAttribute("id") %>님 환영합니다.</H3> */}
		{/* <c:choose>
		<c:when test="${sessionScope.id == null }">
			<p style="text-align:center;">로그인 하면 아이디가 출력 됩니다.</p>
		</c:when>
		</c:choose> */}
      </section>
    );
  }
}

export default Body;