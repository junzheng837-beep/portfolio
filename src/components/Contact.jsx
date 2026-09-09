import { profile } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <>
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-inner">
            <Reveal>
              <h2 className="contact-title">让我们聊聊</h2>
              <p className="contact-desc">
                无论是实习机会、项目合作还是技术交流，都欢迎随时联系我。
              </p>
              <div className="contact-channels">
                <a className="contact-item" href={`mailto:${profile.email}`}>
                  ✉️ {profile.email}
                </a>
                <a className="contact-item" href={`tel:${profile.phone}`}>
                  📱 {profile.phone}
                </a>
                <a
                  className="contact-item"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  🐙 GitHub
                </a>
              </div>
              <a href="#top" className="btn btn-ghost">
                回到顶部 ↑
              </a>
            </Reveal>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © 2026 {profile.name} · {profile.title}
          </span>
          <div className="footer-links">
            <a href="#projects">项目</a>
            <a href="#awards">荣誉</a>
            <a href={`mailto:${profile.email}`}>联系</a>
          </div>
        </div>
      </footer>
    </>
  )
}
