import './App.css';

function App() {
  return (
    <>
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
                    <a href="https://marti.barbaros-dev.xyz" target="blank">
                        <div className="project">
                            <img draggable="false" width="100" height="100" src="https://marti.barbaros-dev.xyz/favicon.ico"/>
                            <h2 className="projectName">Martı BOT</h2>
                        </div>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.mootie.sevgisayaci" target="blank">
                        <div className="project">
                            <img style={{ borderRadius: 20 }} draggable="false" width="100" height="100" src="https://play-lh.googleusercontent.com/LVjfFZSbghKize8WKIzOvvg408MY5koDdE6BFxR-yfnmzdQpNl9Kz1i2mUL8uBigFguw=w240-h480"/>
                            <h2 className="projectName">Sevgi Sayacı</h2>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="footer">
            <h4 style={{ color: "#fff" }}><a className="brbrs" style={{ color: "#FF914D" }}>Barbaros</a> tarafından geliştirildi.</h4>
        </div>
        <style>{`
            h4 {
              font-family: "Nunito";
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
    </>
  );
}

export default App;
