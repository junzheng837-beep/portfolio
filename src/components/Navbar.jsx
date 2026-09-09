import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: '关于我' },
  { href: '#skills', label: '技能' },
  { href: '#projects', label: '项目' },
  { href: '#awards', label: '荣誉' },
  { href: '#contact', label: '联系' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-inner">
        <a href="#top" className="nav-logo">
          ZJ<span>.</span>Portfolio
        </a>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="nav-toggle"
          aria-label="切换菜单"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
