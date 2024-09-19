import React, { Component } from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';

class Boardlist extends Component {
	render() {
		return (
			<div>
				<section>
					<h1>게시판</h1>
					{/* <p>총게시글<span>${pageMaker.total}</span>건</p> */}
					<form method="get" id="searchForm" action="/project/board/list">
						{/* <select name="type">
						<option value="id" <c:if test="${pageMaker.cri.type == 'id'}">selected</c:if>>아이디</option>
						<option value="title" <c:if test="${pageMaker.cri.type == 'title'}">selected</c:if>>제목</option>
						<option value="content" <c:if test="${pageMaker.cri.type == 'content'}">selected</c:if>>내용</option>
						</select> */}
						{/* <input type="text" name="keyword" value="${pageMaker.cri.keyword}"></input>
						<input type="hidden" name="pageNum" value="${pageMaker.cri.pageNum}"></input>
						<input type="hidden" name="amount" value="${pageMaker.cri.amount}"></input> */}
						<button class="btn btn-default">검색</button>
					</form>
					<form id="actionForm" action="/project/board/list" method="get">
						{/* <input type="hidden" name="pageNum" value="${pageMaker.cri.pageNum}"> </input>
						<input type="hidden" name="amount" value="${pageMaker.cri.amount}"></input>
						<input type="hidden" name="type" value="${ pageMaker.cri.type }"> </input>
						<input type="hidden" name="keyword" value="${ pageMaker.cri.keyword }"></input> */}
					</form>
					<table class="table">
						<thead>
							<tr>
								<th>번호</th>
								<th>제목</th>
								<th>작성자</th>
								<th>내용</th>
							</tr>
						</thead>
						<tbody>
							{/* <c:forEach var="board" items="${boardlist }">
							<tr>
							<td>${board.board_no }</td>
							<td>
							<a href="/project/board/read?board_no=${board.board_no }&state=READ">${board.title }</a>
							</td>
							<td>${board.id }</td>
							<td>${board.content}</td>
							</tr>
							</c:forEach> */}
						</tbody>
					</table>

					<ul class="nav navbar-nav navbar-right">
						<li><Link to="/board/Boardwrite" style={{textAlign: 'right'}}>글쓰기</Link></li>
					</ul>
					<div class="paging">
						<a href=""><i class="fa  fa-angle-double-left"></i></a>
						<a href=""><i class="fa fa-angle-left"></i></a>
						{/* <c:forEach var="num" begin="${pageMaker.startPage}" end="${pageMaker.endPage}">
						<a href="/project/board/list?pageNum=${num}&amount=${pageMaker.cri.amount}" class="${pageMaker.cri.pageNum == num?'active':''}">${num }</a>
						</c:forEach> */}
						<a href=""><i class="fa fa-angle-right"></i></a>
						<a href=""><i class="fa  fa-angle-double-right"></i></a>
					</div>
				</section>
			</div>
		);
	}
}

export default Boardlist;
