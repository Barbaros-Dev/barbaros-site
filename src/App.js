import './App.css';
import { FaGithub, FaYoutube, FaDiscord, FaSpotify } from 'react-icons/fa'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Yükleniyor...")

  useEffect(() => {
    fetch("https://api.marti-bot.cf/get/708579930979565588").then(response => response.json()).then(data => setName(data.username + "#" + data.discriminator))
  }, [])

  return (
    <>
        <div className="start">
            <h1>Barbaros</h1>
            <div className='links'>
              <a href='https://www.youtube.com/@barbaros-dev' target="blank" className='icon' style={{ margin: 5 }}><FaYoutube size={25}></FaYoutube></a>
              <a href='https://github.com/Barbaros-Dev' target="blank" className='icon' style={{ margin: 5 }}><FaGithub size={25}></FaGithub></a>
              <a href='https://open.spotify.com/user/f71lm8afeztxi8zperh7rafba?si=625ea2195bc94153' target="blank" className='icon' style={{ margin: 5 }}><FaSpotify size={25}></FaSpotify></a>
              <a href='https://discord.com/users/708579930979565588' target="blank" className='icon' style={{ margin: 5 }}><FaDiscord size={25}></FaDiscord></a>
            </div>
            <div onClick={() => document.getElementById("projects").scrollIntoView()} className='scroll'>
              <label className='scrollText'>Aşağı Kaydır</label>
              <span className="mouse">
                <span className='wheel'></span>
              </span>
            </div>
        </div>
        <div className="secondMain" id="projects">
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
            <h4 style={{ color: "#fff" }}><a className="brbrs" >Barbaros</a> tarafından geliştirildi.</h4>
        </div>
        <style>{`
            html {
              scroll-behavior: smooth;
            }

            .scrollText {
              font-family: 'Nunito';
              color: #fff;
              cursor: pointer;
            }

            .scroll:hover .scrollText {
              color: #ff914d;
            }

            .scroll {
              cursor: pointer;
              position: absolute;
              bottom: 160px;
            }

            .wheel {
              background: #FFF;
              border-radius: 100%;
              display: block;
              position: absolute;
              top: 8px;
              left: 50%;
              transform: translateX(-50%);
              height: 4px;
              width: 4px;
              transition-duration: 0.2s;
            }

            .scroll:hover .wheel {
              background: #ff914d;
              border-radius: 100%;
              display: block;
              position: absolute;
              top: 14px;
              left: 50%;
              transform: translateX(-50%);
              height: 4px;
              width: 4px;
            }

            .scroll:hover .mouse {
              border: solid 2px #ff914d;
            }

            .mouse {
              transition-duration: 0.2s;
              border: solid 2px #FFF;
              border-radius: 16px;
              display: block;
              margin: auto;
              margin-top: 10px;
              height: 26px;
              position: relative;
              width: 20px;
            }

            .links {
              margin-top: 15px;
            }

            .icon {
              transition-duration: 0.2s;
              color: #fff;
            }

            .icon:hover {
              color: #ff914d;
            }

            h4 {
              font-family: "Nunito";
            }
        
            .footer {
              background: #5B5879;
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
              background: rgba(0, 0, 0, 0.1);
              color: #fff;
            }
        
            .project:hover {
              background: rgba(0, 0, 0, 0.2);
            }

            .project:active {
              background: rgba(0, 0, 0, 0.3);
            }
            
            .projectName {
              margin: 0;
            }
        
            .start {
              height: calc(100vh);
              background: linear-gradient(#082032, #2F3B56);
              justify-content: center;
              align-items: center;
              display: flex;
              user-select: none;
              flex-direction: column;
            }
        
            .secondMain {
              justify-content: center;
              align-items: center;
              display: flex;
              flex-direction: row;
              height: calc(100vh);
              user-select: none;
              background: linear-gradient(#2F3B56, #5B5879);
              color: #fff;
            }
        
            h1 {
              margin: 0;
            }
        
            .start h1 {
              z-index: 1;
              font-size: 80px;
              color: #FF914D;
            }
        `}</style>
    </>
  );
}

export default App;
