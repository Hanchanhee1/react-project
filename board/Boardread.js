import React, { Component } from 'react';
import '../Home.css';

class Boardread extends Component {

  render() {
    return (
      <div>
        <section>
          <form class="form-horizontal" action="/project/board/delete" method="post">
            {/* <input type="hidden" name="board_no" value="${board.board_no}"></input>
              <input type='hidden' name='keyword' value='<c:out value="${cri.keyword}"/>'></input>
                <input type='hidden' name='type' value='<c:out value="${cri.type}"/>'></input> */}
                  <div class="form-group">
                    <div class="col-md-2 text-right">
                      <label for="id" class="control-label">번호</label>
                    </div>
                    {/* <div class="col-md-8">${board.board_no}</div> */}
                  </div>
                  <div class="form-group">
                    <div class="col-md-2 text-right">
                      <label for="id" class="control-label">작성자아이디</label>
                    </div>
                    {/* <div class="col-md-8">${board.id}</div> */}
                  </div>
                  <div class="form-group">
                    <div class="col-md-2 text-right">
                      <label for="title" class="control-label">제목</label>
                    </div>
                    {/* <div class="col-md-8">${board.title}</div> */}
                  </div>
                  <div class="form-group">
                    <div class="col-md-2 text-right">
                      <label for="text" class="control-label">내용</label>
                    </div>
                    <div class="col-md-8"
                      style={{width: '500', height: '400px', border: 'solid 1px'}}>
                      {/* ${board.content} */}
                    </div>
                  </div>
                  {/* <c:choose>
                    <c:when test="${sessionScope.id == board.id}">
                      <div class="form-group">
                        <div class="col-md-10 text-center">
                          <input type="button" class="btn btn-lg btn-primary"
                            value="수정"
                            onclick="location.href='/project/board/update?state=UPDATE&board_no=${board.board_no}'"></input>
                            <input type="submit" class="btn btn-lg btn-primary"
                              value="삭제"></input>
                              <button type="button" class="btn btn-danger btn-lg"
                                onclick="location.href='/project/board/list'">
                                <i class="fa fa-fw fa-close"></i> 목록
                              </button>
                            </div>
                        </div>
                    </c:when>
                    <c:otherwise>
                      <div class="form-group">
                        <div class="col-md-10 text-center">
                          <button type="button" class="btn btn-danger btn-lg"
                            onclick="location.href='/project/board/list'">
                            <i class="fa fa-fw fa-close"></i> 목록
                          </button>
                        </div>
                      </div>
                    </c:otherwise>
                  </c:choose> */}
                </form>
              </section>
            </div>
            );
  }
}

            export default Boardread;
