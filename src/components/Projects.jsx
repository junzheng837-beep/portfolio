import { useState } from 'react'
import { projects } from '../data'
import Reveal from './Reveal'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <span className="section-tag">Projects</span>
          <h2 className="section-title">项目展示</h2>
          <p className="section-desc">
            5 个项目均围绕机器人运动控制展开——循迹、平衡、打靶。点击卡片可查看项目详情与视频演示。
          </p>
        </Reveal>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 100}>
              <article
                className={`project-card ${p.detail ? 'project-clickable' : ''}`}
                onClick={p.detail ? () => setActive(p) : undefined}
              >
                <div className="project-cover">
                  <img src={p.image} alt={p.name} loading="lazy" />
                  {p.detail && (
                    <span className="project-play-badge">▶ 视频演示</span>
                  )}
                </div>
                <div className="project-body">
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-role">{p.role}</p>
                  <p className="project-desc">{p.desc}</p>
                  <div className="skill-tags" style={{ marginBottom: 16 }}>
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.detail && (
                    <span className="project-link">查看详情与视频 →</span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
