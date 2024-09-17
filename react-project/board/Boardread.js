import React, { Component } from 'react';
import '../Home.css';

class Boardread extends Component {

  render() {
    return (
      <div>
        <section>
          <h2>제목 : </h2>
          <table style={{ width: '500px' }}>
            <tbody>
              <tr>
                <th>작성자 : </th>
                <td>작성자</td>
              </tr>
              <tr>
                <th>내용 : </th>
                <td>내용</td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                <button onclick="location.href='/board/update'">수정</button>
                <button onclick="">삭제</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default Boardread;
