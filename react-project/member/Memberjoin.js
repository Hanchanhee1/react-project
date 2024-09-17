import React, { Component } from 'react';
import '../Home.css';

class Memberjoin extends Component {
  home = () => {
    window.location.href = '/'; 
  };

  render() {
    return (
      <div>
        <section>
          <h2>회원가입</h2>
          <form action="memberjoinpro.jsp" method="post" name="my">
            <table>
              <tbody>
                <tr>
                  <th>아이디</th>
                  <td>
                    <input type="text" name="id" />
                  </td>
                </tr>
                <tr>
                  <th>비밀번호</th>
                  <td>
                    <input type="password" name="pw" />
                  </td>
                </tr>
                <tr>
                  <th>이름</th>
                  <td>
                    <input type="text" name="name" />
                  </td>
                </tr>
                <tr>
                  <th>성별</th>
                  <td>
                    <label>
                      <input type="radio" value="M" name="gender" />
                      남자
                    </label>
                    <label>
                      <input type="radio" value="F" name="gender" />
                      여자
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>전화번호</th>
                  <td>
                    <input type="text" name="tel1" />-
                    <input type="text" name="tel2" />-
                    <input type="text" name="tel3" />
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style={{ textAlign: 'center' }}>
                    <button type="submit">회원가입</button>
                    <button type="button" onClick={this.home}>홈으로</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </section>
      </div>
    );
  }
}

export default Memberjoin;
