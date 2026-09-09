import { awards } from '../data'
import Reveal from './Reveal'

export default function Awards() {
  return (
    <section className="section section-alt" id="awards">
      <div className="container">
        <Reveal>
          <span className="section-tag">Awards</span>
          <h2 className="section-title">荣誉奖项</h2>
          <p className="section-desc">
            在电子设计与嵌入式竞赛中验证过的工程能力。
          </p>
        </Reveal>
        <div className="docs-list">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="doc-card">
                <div className="doc-icon">{a.icon}</div>
                <div className="doc-info">
                  <h3 className="doc-title">{a.title}</h3>
                  <p className="doc-meta">{a.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
