import React, { Component } from 'react'
class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <footer>
                    Developed by <strong className="brbrs">Barbaros</strong>
                </footer>
                <style>{`
                    footer {
                        font-family: "Batangas";
                        background-color: #212529;
                        color: #f4f7f5;
                        width: 100%;
                        text-align: center;
                        padding: 30px 0;
                        position: absolute;
                        height: 20px;
                        bottom: 0px;
                    }
                `}</style>
            </div>
        )
    }
}
export default Footer;
