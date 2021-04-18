import React, { Component } from 'react'
class Error extends Component {
    render() {
        return(
            <div>
                <div className="ana">
                    <h2>404<br/>Sayfa Bulunamadı</h2>
                    <a href="/">Ana Sayfa</a>ya dönebilir ya da ÖvGeç ile kendini biraz övdürebilirsin
                </div>
                <div className="ovgec">
                    <div className="baslik">ÖvGeç</div>
                    <div class="orta-input" id="orta-input">
                        <input type="text" placeholder="Kimi Övücem?" id="ovme-ismi" maxlength="12"/>
                        <input class="buton" type="button" value="ÖV" onclick="ovhadi()"/>
                    </div>
                </div>
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Nunito');
                    .ana {
                        position: fixed;
                        top: 30%;
                        left: 10%;
                        text-align: center;
                    }

                    a {
                        text-decoration: none;
                        color: #9b9d8c;
                    }

                    .ovgec {
                        font-family: 'Nunito';
                        border-radius: 10px;
                        background: linear-gradient(to bottom right, #7e70ff, #5442f5);
                        padding: 60px;
                        position: fixed;
                        top: 30%;
                        left: 60%;
                    }

                    .baslik {
                        text-align: center;
                        font-size: 200%;
                        color: #fff;
                    }

                    input {
                        width: 150px;
                        height: 45px;
                        border: none;
                        border-radius: 50px 0 0 50px;
                        position: relative;
                        outline: none;
                        font-size: 20px;
                        padding-left: 38px;
                    }

                    input:focus {
                        box-shadow: 0 0 10px #fff;
                    }
                      
                    input:focus ~ .buton {
                        box-shadow: 0 0 10px #fff;
                    }

                    .buton {
                        width: 60px;
                        border-radius: 0 50px 50px 0;
                        font-size: 14px;
                        padding: 0;
                        background: #F90093;
                        color: #fff;
                        cursor: pointer;
                    }
                      
                    .buton:hover {
                        background: #ce0079;
                    }
                `}</style>
            </div>
        )
    }
}
export default Error;