import React, { Component } from 'react';
import '../Home.css';

class Memread extends Component {

    render() {
        return (
            <div>
                <section>
                    <h1>마이페이지</h1>
                    <a href="/project/">홈으로</a>
                    <form action="/project/member/delete" method="post" onsubmit="return confirm('정말로 삭제하시겠습니까?');">
                        <input type="hidden" name="id" value="${member.id}" />
                        {/* <c:if test="${not empty member}">
                            <p>아이디: ${member.id}</p>
                            <p>비밀번호: ${member.pw}</p>
                            <p>이름: ${member.name}</p>
                            <p>성별: ${member.gender}</p>
                            <p>전화번호: ${member.tel}</p>
                            <p>생일: ${member.birth}</p>
                        </c:if>
                        <c:if test="${empty member}">
                            <p>회원 정보를 찾을 수 없습니다.</p>
                        </c:if> */}
                        <button type="button" onclick="location.href='/project/member/update?id=${member.id}&state=READ'">수정</button>
                        <button type="submit">삭제</button>
                    </form>
                </section>
            </div>
        );
    }
}

export default Memread;
