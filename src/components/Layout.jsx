import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../content'
import CodeField from './CodeField'

const links = [
  { to: '/', label: 'home' },
  { to: '/work', label: 'work' },
  { to: '/about', label: 'about' },
]

export default function Layout() {
  const { pathname } = useLocation()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <div className="shell">
      <CodeField />
      <div className="scan" aria-hidden="true" />
      <a className="skip" href="#main">
        skip to content
      </a>
      <header className="topbar glass">
        <NavLink to="/" className="brand">
          <span className="brand-mark">SR</span>
          <span className="brand-text">
            <strong>{profile.name}</strong>
            <small>~/sys · {profile.title.toLowerCase()}</small>
          </span>
        </NavLink>
        <nav className="nav" aria-label="primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link on' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a className="mail-chip" href={`mailto:${profile.email}`}>
          mail
        </a>
      </header>

      <main id="main" className="stage" key={pathname}>
        <Outlet context={{ copyEmail, copied }} />
      </main>

      <footer className="status glass">
        <span className="dot" />
        <span>link up</span>
        <a href={profile.github} target="_blank" rel="noreferrer">
          github/{profile.handle}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          linkedin
        </a>
        <button type="button" className="ghost" onClick={copyEmail}>
          {copied ? 'copied' : profile.email}
        </button>
      </footer>
    </div>
  )
}
