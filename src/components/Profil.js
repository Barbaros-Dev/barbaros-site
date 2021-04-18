import React, { Component } from 'react'
class Profil extends Component {
    componentDidMount() {
        var cerezadi = "name"
        var konum0 = document.cookie.indexOf(cerezadi + "=");
        var konum;

        if (konum0 != -1){
          konum0 = konum0 + cerezadi.length + 1;
          konum = document.cookie.indexOf(";", konum0);
          if (konum == -1) {
            konum = document.cookie.length;
          }
          var deger2 = unescape(document.cookie.substring(konum0, konum));
          document.getElementById("name").innerHTML = deger2
        }
        var cerezadi = "password"
        var konum1 = document.cookie.indexOf(cerezadi + "=");
        var konum2;

        if (konum1 != -1){
          konum1 = konum1 + cerezadi.length + 1;
          konum2 = document.cookie.indexOf(";", konum1);
          if (konum2 == -1) {
            konum2 = document.cookie.length;
          }
          var deger3 = unescape(document.cookie.substring(konum1, konum2));
          document.getElementById("input").innerHTML = deger3
        }
    }
    render() {
        function cıkıs() {
            document.cookie = 'user=; max-age=0'
            document.cookie = 'name=; max-age=0'
            document.cookie = 'password=; max-age=0'
            window.location = "/"
        }
        function edit() {
            window.location = "/profil/düzenle"
        }
        return (
            <div>
                <div className="ana">
                    <p id="name" className="name"></p>
                    <div id="name-input"></div><br/>
                    <div id="input" className="input"></div>
                    <br/>
                    <div id="btn-edit"><button onClick={edit}>Düzenle</button><button id="btn" onClick={cıkıs}>Çıkış Yap</button><br/><br/></div>
                </div>
                <style>{`
                    .ana {
                        width: 100%;
                        max-width: 500px;
                        margin: 0 auto;
                        margin-top: 100px;
                        padding: 20px;
                        text-align: center;
                        background: #212529;
                        color: #fff;
                    }

                    .name {
                        font-size: 30px;
                    }

                    .input {
                        font-size: 25px;
                    }
                    
                    .errorMessage {
                        color: #000;
                        font-size: 16px;
                        font-weight: bold;
                        margin-top: -30px;
                        margin-bottom: 10px;
                    }
                    
                    input {
                        padding-left: 15px;
                        border: 0;
                        border-bottom: 5px solid rgba(0,0,0,.3);
                        width: 300px;
                        height: 40px;
                        outline: none;
                        transition: 0.4s;
                    }
                    
                    input:focus {
                        border-bottom: 5px solid #2f2c33;
                    }
        
                    button {
                        margin-top: 40px;
                        width: 100px;
                        height: 30px;
                        border: 2px solid #2f2c33;
                        background: none;
                        color: #fff;
                        outline: none;
                        transition: 0.4s;
                    }
        
                    button:hover {
                        background: #2f2c33;
                    }
        
                    .text {
                        font-size: 14px;
                    }
                    
                    .text a {
                        color: #000;
                    }
                    
                    @media (max-width: 623px) {
                        .ana {
                          padding: 50px 0px;
                        }
                    }
                `}</style>
            </div>
        )
    }
}
export default Profil;