import React, { Component } from 'react'
class Panel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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
        }else{
          window.location = "/"
        }
        return (
          <div>
            Selam Admin Bey Burası Panel
          </div>
        )
    }
}
export default Panel;