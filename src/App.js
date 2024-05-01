import { useEffect, useState } from 'react';
import './App.css';
import { FaYoutube, FaGithub, FaSpotify, FaDiscord, FaInstagram, FaCaretDown } from 'react-icons/fa'

function App() {
  const [screenWidth, setScreenWidth] = useState()
  const [description] = useState([
    "Ben developer'ım",
    "Ben full-stack geliştiriciyim",
    "Ben back-end severim"
  ])
  const [skills] = useState([
    { name: "HTML", color: "#e14e1d", percentage: 85 },
    { name: "CSS", color: "#0277bd", percentage: 85 },
    { name: "JavaScript", color: "#f0db4f", percentage: 80 },
    { name: "Python", color: "#306998", percentage: 15 }
  ])
  const [projects] = useState([
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
    //{
    //  name: "Dersteyim",
    //  image: "https://dersteyim-yeni.vercel.app/logo.png",
    //  link: "https://dersteyim-yeni.vercel.app"
    //},
    {
      name: "Geribildirim App",
      image: "https://geribildirim.vercel.app/logo.png",
      link: "https://geribildirim.vercel.app"
    }
  ])

  const [works] = useState([
    {
      name: "VIPMUN'23",
      image: "/assets/vipmun.png",
      link: "https://vipmun.com",
      description: "MUN websitesi",
      technologies: [
        "Next.js"
      ]
    },
    {
      name: "ALMUN'24",
      image: "/assets/almun.png",
      link: "https://almun24.com",
      description: "MUN websitesi",
      technologies: [
        "Next.js",
        "Tailwind CSS"
      ]
    }
  ])

  useEffect(() => {
    setScreenWidth(window.screen.width)
    let index = 0

    setInterval(() => {
      if(description.length === index + 1) index = 0
      else index += 1
      document.getElementById("description").classList.remove("animate__bounceIn")
      document.getElementById("description").innerText = description[index]
      void document.getElementById("description").offsetWidth
      document.getElementById("description").classList.add("animate__bounceIn")
    }, 3000)
  }, [description])

  return (
    <div className="container">
      <div className='home'>
        <h1 className='header'>Barbaros</h1>
        <span className='animate__bounceIn' id='description'>{description[0]}</span>
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
        <a href='#portfolio' className='scroll'>
          Portfolyo
          <FaCaretDown size={25}></FaCaretDown>
        </a>
      </div>
      <div className='separator'></div>
      <div id='portfolio' className='section projects'>
        <h1 className='sectionHeader'>Portfolyo</h1>
        <div className='worksContainer'>
          {works.map((work, i) => (
            <div className='work' key={i}>
              <label className='workName'>{work.name}</label>
              <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img draggable="false" alt={work.name} width={480} height={270} className='workImage' src={work.image}></img>
                <div className='workContent'>
                  {/*<label className='workDescription'>{work.description}</label>*/}
                  <div className='technologiesContainer'>
                    {/*<label>Kullanılan teknolojiler:</label>*/}
                    <div className='technologies'>
                      {work.technologies.map((tech, i) => (
                        <label key={i} className='technology'>{tech}</label>
                      ))}
                    </div>
                  </div>
                  <a href={work.link} target='blank'><button className='workButton'>Websitesine git</button></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='separator'></div>
      <div id='projects' className='section projects'>
        <h1 className='sectionHeader'>Projeler</h1>
        <div className='projectsContainer'>
          {projects.map((project, i) => (
            <a target='blank' href={screenWidth < 700 && project.mobile ? project.mobile : project.link} className='project' key={i}>
              <img draggable="false" alt={project.name} width={100} className='projectImage' src={project.image}></img>
              <label className='projectName'>{project.name}</label>
            </a>
          ))}
        </div>
      </div>
      <div className='separator'></div>
      <div className='footer'>
        <div className='footerText'><a target='blank' href='https://discord.com/users/708579930979565588' className='footerName'>Ahmet Esad Kocamış</a> tarafından 💖 ile geliştirildi.</div>
      </div>
    </div>
  );
}

export default App;
