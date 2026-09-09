import { skills } from '../data'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <Reveal>
          <span className="section-tag">Skills</span>
          <h2 className="section-title">技术栈</h2>
          <p className="section-desc">
            从单片机、通信协议到控制算法与端侧 AI 部署，均有实际项目落地。
          </p>
        </Reveal>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <div className="skill-card">
                <div className="skill-icon">{s.icon}</div>
                <h3 className="skill-name">{s.name}</h3>
                <p className="skill-desc">{s.desc}</p>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
