import React, { Component } from 'react';
import '../Home.css';

class Boardupdate extends Component {

  render() {
    return (
      <div>
        <section>
        <h2>제목 : </h2>
		<table style={{ width: '500px' }}>
			<tr>
				<th>작성자 : </th>
				<td>
					작성자
				</td>
			</tr>
			<tr>
				<th>내용 : </th>
				<td>
					내용
				</td>
			</tr>
			<tr>
				<td colspan="2" style={{textAlign:'center'}}>
					<button type="submit" value="수정하기"></button>
					<button type="button" value="이전으로" onclick="location.href='/board/list'"></button>
				</td>
			</tr>
		</table>
        </section>
      </div>
    );
  }
}

export default Boardupdate;
