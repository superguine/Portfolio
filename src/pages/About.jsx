import { useOutletContext } from 'react-router-dom'
import { interests, profile } from '../content'

export default function About() {
  const { copyEmail, copied } = useOutletContext()

  return (
    <div className="page about">
      <header className="page-hero glass">
        <p className="kicker">cat ./about.md</p>
        <h1>About</h1>
        <p className="body-copy">{profile.bio}</p>
      </header>

      <section className="interest-grid">
        {interests.map((item) => (
          <article key={item.id} className="interest glass">
            <h2>{item.label}</h2>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="contact glass">
        <h2>socials & mail</h2>
        <p>Email is the door. GitHub and LinkedIn are the paper trail.</p>
        <div className="hero-actions">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            write email
          </a>
          <button type="button" className="btn" onClick={copyEmail}>
            {copied ? 'copied' : 'copy address'}
          </button>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            github
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
        </div>
      </section>
    </div>
  )
}
