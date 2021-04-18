import React from 'react';
import { auth } from '../firebase';

class Giriş extends React.Component {
  constructor(props) {
    super(props)
  }

  login() {
    auth.signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("sifre").value)
    .then((userCredential) => {
      var user = userCredential.user;
      let sifre = document.getElementById("sifre").value
      document.cookie = "name=Barbaros"
      document.cookie = "password=" + sifre
      document.cookie = "user=admin"
      window.location = "/panel"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  render() {
    return (
      <div className="input-div">
        <div className="ana">
          <p>Giriş Yap</p>
          <div>
            <input className="inpt" id="email" type="text" placeholder="E-posta" required/>
          </div>
          <div style={{ marginTop: 10 }}>
            <input className="inpt" id="sifre" type="password" placeholder="Şifre" required/>
          </div>
          <button id="btn" onClick={this.login}>Giriş Yap</button><br/><br/>
        </div>
        <style>{`
          .ana {
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
            margin-top: 100px;
            padding: 20px;
            text-align: center;
            font-size: 30px;
            background: #212529;
            color: #fff;
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
    );  
  }

}

export default Giriş;