import { useEffect, useRef } from 'react'

/** 项目详情弹层：标题 + 视频演示（原生 controls：播放/暂停/进度条/音量） */
export default function ProjectModal({ project, onClose }) {
  const videoRef = useRef(null)

  const isOpen = Boolean(project?.detail)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!project?.detail) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={project.detail.title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 className="modal-title">{project.detail.title}</h3>
          <button className="modal-close" aria-label="关闭" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-video-wrap">
          <video
            ref={videoRef}
            className="modal-video"
            src={project.detail.video}
            controls
            controlsList="nodownload"
            playsInline
            preload="metadata"
          />
        </div>
        <div className="modal-footer">
          <div className="skill-tags">
            {project.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
