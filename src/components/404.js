import React, { Component } from 'react'
class Error extends Component {
    render() {
        return(
            <div>
                <div className="ana">
                    <h2>404<br/>Sayfa Bulunamadı</h2>
                    <a href="/">Ana Sayfa</a>ya dönebilir ya da burda böyle bekleyebilirsin karar senin!
                </div>
            </div>
        )
    }
}
export default Error;