import React, { Component } from 'react';
import '../Home.css';

class Write extends Component {
  render() {
    return (
      <div>
        <section>
          <h2>글쓰기</h2>
          <form>
            <table style={{ marginRight: '100px' }}>
              <tbody>
                <tr>
                  <th>글 제목</th>
                  <td>
                    <input type="text" name="title" />
                  </td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td>
                    <input type="text" name="id" readOnly value="dd" />
                  </td>
                </tr>
                <tr>
                  <th>글 내용</th>
                  <td>
                    <textarea name="contents" style={{ width: '500px', height: '200px' }} />
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ textAlign: 'center' }}>
              <button type="submit">저장</button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default Write;
