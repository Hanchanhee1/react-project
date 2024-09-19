import React, { Component } from 'react';
import '../Home.css';

class Boardwrite extends Component {
  
	render() {
		return (
			<div>
				<section>
					<h4>
						<i className="fa fa-angle-right"></i> 게시글 작성하기
					</h4>
					<hr />
					<div className="row mt">
						<div className="col-lg-12">
							<div className="form-panel">
								<form className="form-horizontal style-form" action="/project/board/write" method="post">
									<div className="form-group" style={{ border: '1px solid #eff2f7' }}>
										<label className="col-sm-2 col-sm-2 control-label">작성자아이디</label>
										<div className="col-sm-10">
											{/* <input type="hidden" name="id" value="<%= session.getAttribute(" id") %>">
											<p class="form-control-static"><%= session.getAttribute("id") %></p> */}
										</div>
										<div className="form-group">
											<label className="col-sm-2 col-sm-2 control-label">제목</label>
											<div className="col-sm-8">
												<input type="text" className="form-control" name="title" />
											</div>
										</div>
										<div className="form-group">
											<label className="col-sm-2 col-sm-2 control-label">내용</label>
											<div className="col-sm-8">
												<textarea 
													id="content" 
													style={{ width: '100%', border: '1px solid', overflow: 'visible', textOverflow: 'ellipsis' }} 
													rows="15" 
													name="content">
												</textarea>
											</div>
										</div>
										<div className="form-group">
											<div className="col-lg-4 text-center"></div>
											<div className="col-lg-2 text-center">
												<button type="submit" className="btn btn-success" style={{ width: '100px', backgroundColor: '#0ea006' }}>
													등록
												</button>
											</div>
											<div className="col-lg-2 text-center">
												<button type="reset" className="btn btn-default" style={{ width: '100px', backgroundColor: '#9a9a9a' }}>
													취소
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Boardwrite;
