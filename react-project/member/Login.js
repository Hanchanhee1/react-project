import React, { Component } from 'react';
import '../Home.css';

class Login extends Component {

  render() {
    return (
      <div>
        <section>
        <h2>로그인</h2>
		<form action="loginpro.jsp" name="my" method="post">
		<table>
			<tr>
				<th>아이디</th>
				<td>
					<input type="text" name="id"></input>
				</td>
			</tr>
			<tr>
				<th>비밀번호</th>
				<td>
					<input type="text" name="pw"></input>
				</td>
			</tr>
			<tr>
				<td colspan="2" style={{textAlign:'center'}}>
					<button type="submit" value="로그인">로그인</button>
					<button type="reset" value="다시쓰기">다시쓰기</button>
				</td>
			</tr>
		</table>
		</form>
        </section>
      </div>
    );
  }
}

export default Login;
