import React, { Component } from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';

class List extends Component {

  render() {
    return (
      <div>
        <section>
        <h2>게시판 목록</h2>
		<table style={{width: '500px'}}>
			<tr>
				<th>번호</th>
				<th>제목</th>
				<th>작성 아이디</th>
			</tr>
			{/* <c:forEach items="${list }" var="list">
			<tr>
				<th>${list.borad_num}</th>
				<th><a href="/board/read">${list.title}</a></th>
				<th>${list.id }</th>
			</tr>
			</c:forEach> */}
		</table>
		<button type="button" value="글쓰기" style={{textAlign:'right'}}><Link to="/board/write">글쓰기</Link></button>
        </section>
      </div>
    );
  }
}

export default List;
