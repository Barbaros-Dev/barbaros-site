import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var cerezadi = "user"
        var ara = cerezadi + "=";
        var konum1 = document.cookie.indexOf(ara);
        var konum2;

        if (konum1 != -1){
          konum1 = konum1 + cerezadi.length + 1;
          konum2 = document.cookie.indexOf(";", konum1);
          if (konum2 == -1) {
            konum2 = document.cookie.length;
          }
          var deger = unescape(document.cookie.substring(konum1, konum2));
          if(deger === "admin"){
              document.getElementById("grs").innerHTML = `<a href="/panel">Panel</a>`;
              document.getElementById("username").style.display = "inline"
          }
        }
        var konum0 = document.cookie.indexOf("name=");
        var konum;

        if (konum0 != -1){
          konum0 = konum0 + cerezadi.length + 1;
          konum = document.cookie.indexOf(";", konum0);
          if (konum == -1) {
            konum = document.cookie.length;
          }
          var deger2 = unescape(document.cookie.substring(konum0, konum));
          document.getElementById("username").innerHTML = `<a className="name" href="/profil">${deger2}</a>`
        }
    }
    render() {
        return (
            <div>
                <header>
                    <div class="container">
                        <a id="title" class="nav-title" href="/">Barbaros</a>
                        <nav>
                            <ul>
                                <li><a href="/">Ana Sayfa</a></li>
                                <li id="grs"><a href="/giris">Giriş Yap</a></li>
                                <li id="username" className="username"></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <style>{`
                    header {
                        font-family: "Batangas";
                    }

                    .container {
                        width: 80%;
                        margin: 0 auto;
                    }

                    .username {
                        color: #000;
                    }

                    .username {
                        display: none;
                    }

                    header {
                        width: 100%;
                        height: 60px;
                        position: relative;
                        background: #212529;
                    }
                  
                    header::after {
                        content: '';
                        display: table;
                        clear: both;
                    }

                    .logo {
                        float: left;
                        padding: 10px 0;
                    }

                    nav {
                        padding-top: .5rem;
                        padding-bottom: .5rem;
                        float: right;
                    }

                    nav ul {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                        box-sizing: border-box;
                    }

                    nav li {
                        display: inline-block;
                        margin-left: 30px;
                        margin-top: 10px;
                        position: relative;
                    }

                    nav ul li a {
                        color: #9b9d8c;
                        text-decoration: none;
                        padding: 5px;
                        margin: 0px;
                        border-radius: .80rem;
                        transition: 0.25s;
                    }

                    a:hover {
                        color: #c7c8c9
                    }

                    nav a:hover::before {
                        width: 100%;
                    }

                    .nav-title {
                        padding-bottom: .3125rem;
                        position: relative;
                        top: 15px;
                        color: #FF914D;
                        font-size: 1.25rem;
                        text-decoration: none;
                        font-family: "Batangas";
                    }

                    .nav-title:hover {
                        color: #FF914D;
                        text-decoration: none;
                    }

                    .ul {
                        list-style-type: none;
                        padding: 0;
                        height: 80%;
                    }
                `}</style>
            </div>
        )
    }
}
export default Header;
