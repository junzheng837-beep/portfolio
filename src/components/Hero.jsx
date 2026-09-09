import { profile } from '../data'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-flex">
          <div className="hero-content">
            <Reveal>
              <p className="hero-hello">{profile.hello}</p>
              <h1 className="hero-title">{profile.name}</h1>
              <p className="hero-subtitle">{profile.title}</p>
              <p className="hero-badge">{profile.jobIntent}</p>
              <p className="hero-desc">{profile.intro}</p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  查看我的项目
                </a>
                <a href="#contact" className="btn btn-ghost">
                  联系我
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="hero-portrait">
              <img src="media/portrait.jpg" alt={`${profile.name}的个人照片`} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
