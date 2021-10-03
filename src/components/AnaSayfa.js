import React, { Component } from 'react'
class AnaSayfa extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="start">
                    <h1>Barbaros</h1>
                </div>
                <div className="secondMain">
                    <div className="projectsDiv">
                        <h1>Projelerim</h1>
                        <br/>
                        <br/>
                        <div className="projects">
                            <a href="https://ovgec.glitch.me" target="blank">
                                <div className="project">
                                   <img draggable="false" width="100" height="100" src="https://cdn.glitch.com/57fac641-81be-4f1a-b8ab-d3f8edb1751e%2F%C3%B6vge%C3%A7-ikon.png?v=1613084601393"/>
                                   <h2 className="projectName">ÖvGeç</h2>
                                </div>
                            </a>
                            <a href="https://barbarostagram.herokuapp.com" target="blank">
                                <div className="project">
                                    <img draggable="false" width="100" height="100" src="https://barbaros-dev.herokuapp.com/Barbarostagram-Logo.png"/>
                                    <h2 className="projectName">Barbarostagram</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <h4><a className="brbrs">Barbaros</a> tarafından geliştirildi.</h4>
                </div>
                <style jsx>{`
                    @import url('https://fonts.googleapis.com/css2?family=Nunito');

                    .brbrs {
                        color: #FF914D;
                    }

                    h4 {
                        font-family: "Nunito";
                        color: #fff;
                    }

                    .footer {
                        background: #082032;
                        height: 150px;
                        user-select: none;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                    }

                    a {
                        text-decoration: none;
                    }

                    .projects {
                        display: flex;
                    }

                    .projectsDiv {
                        text-align: center;
                    }

                    img {
                        margin: 15px;
                    }

                    .project {
                        padding: 10px;
                        border-radius: 20px;
                        cursor: pointer;
                        transition: 0.2s;
                        margin: 15px;
                        font-family: "Nunito";
                        overflow: auto;
                        width: 190px;
                        height: 194px;
                        background: #082032;
                        color: #fff;
                    }

                    .project:hover {
                        background: #2C394B;
                    }
                    
                    .projectName {
                        margin: 0;
                    }

                    .start {
                        height: calc(100vh);
                        background-color: #082032;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                        font-size: 40px;
                        user-select: none;
                        color: #FF914D;
                    }

                    .secondMain {
                        justify-content: center;
                        align-items: center;
                        display: flex;
                        flex-direction: row;
                        height: calc(100vh);
                        user-select: none;
                    }

                    h1 {
                        margin: 0;
                    }

                    .header h1 {
                        z-index: 1;
                    }
                `}</style>
            </div>
        )
    }
}
export default AnaSayfa;
