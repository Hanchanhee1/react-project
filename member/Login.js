import React, { Component } from 'react';
import '../Home.css';

class Login extends Component {

  render() {
    return (
      <div>
        <section>
            <form name="login_frm" action="/project/member/loginpro" method="post">
        <table style={{cellpadding:'0', cellspacing:'5', width:'815', bgcolor:'#f3f3f3', border:'0'}}>
            <tr>
                <td style={{bgcolor:'#ffffff', height:'100%' , align:'center' , valign:'top'}}>
                    <table style={{cellpadding:'0', cellspacing:'0' ,border:'0', width:'710'}}>
                        <tr>
                            <td>
                                <table style={{cellpadding:'0', cellspacing:'0', width:'100%', bgcolor:'#f7f7f7', border:'0'}}>
                                    <tr>
                                        <td style={{bgcolor:'#ffffff', align:'center'}}>
                                            <table style={{cellpadding:'0', cellspacing:'0', border:'0', align:'center', width:'678'}}>
                                                <tr>
                                                    <td style={{align:'center', width:'353'}}>
                                                        <table style={{cellpadding:'0', cellspacing:'0', border:'0', width:'353'}}>
                                                            <tr>
                                                                <td>
                                                                    <table style={{cellpadding:'0', cellspacing:'0', border:'0'}}>
                                                                        <tr>
                                                                            <td colspan='3'><img src="/images/page_login.gif"></img></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td height='25'></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td background="/images/inputBg.gif"><img src="/images/login_id.gif"></img></td>
                                                                            <td background="/images/inputBg.gif">
                                                                                <input type="text" name="id" size="15" class="grayinput" tabindex='1' style={{width: '156'}} value=""></input>
                                                                            </td>
                                                                            <td rowspan='3' style={{paddingLeft:'10', valign:'bottom'}}>
                                                                                <input type='image' src="/images/btn_login.gif" border="0" tabindex='3'></input>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style={{height:'10'}}></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td background="/images/inputBg.gif"><img src="/images/login_pass.gif"></img></td>
                                                                            <td background="/images/inputBg.gif">
                                                                                <input type="password" name="pw" size="15" class="grayinput" tabindex='2' style={{width: '156'}}></input>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan='3'></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td style={{paddingLeft: '60', paddingTop: '60'}}></td>
                                                </tr>
                                                <tr>
                                                    <td colspan='3' style={{paddingTop:'20', paddingLeft:'40'}}></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style={{height:'30'}}></td>
                        </tr>
                        <tr>
                            <td>
                                {/* <c:if test="${not empty message}">
                                    <p class="error-message">${message}</p>
                                </c:if> */}
                            </td>
                        </tr>
                        <tr>
                            <td style={{height:'49'}}></td>
                        </tr>
                    </table>
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
