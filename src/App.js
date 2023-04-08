import './App.css';
import { FaGithub, FaYoutube, FaDiscord, FaSpotify } from 'react-icons/fa'
import { useEffect } from 'react';
import { useState } from 'react';
const projects = [
  {name: "ÖvGeç", image: "https://cdn.glitch.com/57fac641-81be-4f1a-b8ab-d3f8edb1751e%2F%C3%B6vge%C3%A7-ikon.png?v=1613084601393", link: "https://ovgec.glitch.me/"},
  {name: "Martı BOT", image: "https://marti.barbaros-dev.xyz/favicon.ico", link: "https://marti.barbaros-dev.xyz/"},
  {name: "Sevgi Sayacı", image: "https://play-lh.googleusercontent.com/LVjfFZSbghKize8WKIzOvvg408MY5koDdE6BFxR-yfnmzdQpNl9Kz1i2mUL8uBigFguw=w240-h480", link: "https://play.google.com/store/apps/details?id=com.mootie.sevgisayaci"},
  {name: "Dersteyim", image: "https://dersteyim-yeni.vercel.app/logo.png", link: "https://dersteyim-yeni.vercel.app/"}
]

function App() {
  const [name, setName] = useState("Barbaros")

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
          <div style={{ display: "flex", overflowX: "auto", overflowY: "hidden" }}>
            {projects.map((project, i) => (
              <a className='project' target='blank' href={project.link} key={i}>
                <img style={{ borderRadius: 30, width: 100, height: 100, margin: 0, marginBottom: 20 }} src={project.image} draggable="false"></img>
                <h2 style={{ color: "#fff", fontFamily: "Nunito", margin: 0 }}>{project.name}</h2>
              </a>
            ))}
          </div>
        </div>
        <div className="footer">
            <h4 style={{ color: "#fff" }}><a href='https://discord.com/users/708579930979565588' target='blank' className="brbrs" style={{ transitionDuration: "0.2s", cursor: "pointer" }}>Barbaros</a> tarafından geliştirildi.</h4>
        </div>
        <style>{`
            .brbrs {
              color: #FF914D
            }

            .brbrs:hover {
              color: #fff;
              background: #FF914D;
              padding: 5px;
              border-radius: 10px;
            }

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
              justify-content: center;
              align-items: center;
            }
        
            .projectsDiv {
              text-align: center;
            }
        
            img {
              margin: 15px;
            }

            .project {
              background: rgba(0, 0, 0, 0.1);
              min-width: 210px;
              width: 210px;
              height: 214px;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              margin: 15px;
              border-radius: 20px;
              transition: 0.2s;
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
