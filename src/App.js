import { useEffect, useState } from 'react';
import './App.css';
import { FaYoutube, FaGithub, FaSpotify, FaDiscord, FaInstagram, FaCaretDown } from 'react-icons/fa'

function App() {
  const [screenWidth, setScreenWidth] = useState()

  const projects = [
    {
      name: "ÖvGeç",
      image: "https://cdn.glitch.me/57fac641-81be-4f1a-b8ab-d3f8edb1751e%2F%C3%B6vge%C3%A7-ikon.png",
      link: "https://ovgec.glitch.me",
      mobile: "https://play.google.com/store/apps/details?id=com.mootie.ovgec"
    },
    {
      name: "Martı BOT",
      image: "https://marti.barbaros-dev.xyz/favicon.ico",
      link: "https://marti.barbaros-dev.xyz"
    },
    {
      name: "Sevgi Sayacı",
      image: "https://play-lh.googleusercontent.com/LVjfFZSbghKize8WKIzOvvg408MY5koDdE6BFxR-yfnmzdQpNl9Kz1i2mUL8uBigFguw=w240-h480",
      link: "https://play.google.com/store/apps/details?id=com.mootie.sevgisayaci"
    },
    {
      name: "Dersteyim",
      image: "https://dersteyim-yeni.vercel.app/logo.png",
      link: "https://dersteyim-yeni.vercel.app"
    }
  ]

  useEffect(() => {
    setScreenWidth(window.screen.width)
  }, [])

  return (
    <div className="container">
      <div className='home'>
        <h1 className='header'>Barbaros</h1>
        <div className='socials'>
          <a className='social' target='blank' href='https://youtube.com/@barbaros-dev'>
            <FaYoutube className='icon' size={25}></FaYoutube>
          </a>
          <a className='social' target='blank' href='https://github.com/Barbaros-Dev'>
            <FaGithub className='icon' size={25}></FaGithub>
          </a>
          <a className='social' target='blank' href='https://open.spotify.com/user/f71lm8afeztxi8zperh7rafba?si=629c6667fc5848b8'>
            <FaSpotify className='icon' size={25}></FaSpotify>
          </a>
          <a className='social' target='blank' href='https://discord.com/users/708579930979565588'>
            <FaDiscord className='icon' size={25}></FaDiscord>
          </a>
          <a className='social' target='blank' href='https://instagram.com/aesadkocamis'>
            <FaInstagram className='icon' size={25}></FaInstagram>
          </a>
        </div>
        <a href='#projects' className='scroll'>
          Aşağı Kaydır
          <FaCaretDown size={25}></FaCaretDown>
        </a>
      </div>
      <div className='seperator'></div>
      <div id='projects' className='projects'>
        <h1 className='projectsHeader'>Projelerim </h1>
        <div className='projectsContainer'>
          {projects.map((project, i) => (
            <a target='blank' href={screenWidth < 700 && project.mobile ? project.mobile : project.link} className='project' key={i}>
              <img width={100} className='projectImage' src={project.image}></img>
              <label className='projectName'>{project.name}</label>
            </a>
          ))}
        </div>
      </div>
      <div className='seperator'></div>
      <div className='footer'>
        <div className='footerText'><a target='blank' href='https://discord.com/users/708579930979565588' className='footerName'>Barbaros</a> tarafından geliştirildi.</div>
      </div>
    </div>
  );
}

export default App;
