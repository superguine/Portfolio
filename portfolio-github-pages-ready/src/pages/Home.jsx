import { Link, useOutletContext } from 'react-router-dom'
import ToolIcon from '../components/ToolIcon'
import { areas, profile, projects, tools } from '../content'

export default function Home() {
  const { copyEmail, copied } = useOutletContext()

  return (
    <div className="page home">
      <section className="hero glass">
        <p className="prompt">
          <span className="prompt-user">shawon@workstation</span>
          <span className="prompt-path">:~</span>
          <span className="prompt-cmd">$ whoami</span>
          <span className="caret" />
        </p>
        <p className="kicker">software engineer · backend · frontend · ml</p>
        <h1>
          {profile.name}
          <span className="h-sub">{profile.pitch}</span>
        </h1>
        <div className="hero-actions">
          <Link className="btn primary" to="/work">
            open work
          </Link>
          <button type="button" className="btn" onClick={copyEmail}>
            {copied ? 'email copied' : 'copy email'}
          </button>
        </div>
      </section>

      <section className="areas">
        {areas.map((area) => (
          <article key={area.id} className="area glass">
            <header>
              <span className="pid">mod/{area.label}</span>
              <h2>{area.label}</h2>
            </header>
            <p>{area.hint}</p>
            <ul>
              {area.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="dock glass">
        <div className="dock-head">
          <h2>tools on path</h2>
          <p>icons for the stack I actually use — recent work sits toward the left.</p>
        </div>
        <ul className="tool-grid">
          {tools.map((tool) => (
            <li key={tool.id} className="tool-cell">
              <ToolIcon id={tool.id} />
              <span>{tool.name}</span>
              {tool.note ? <small>{tool.note}</small> : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="preview">
        <div className="preview-head">
          <h2>selected processes</h2>
          <Link to="/work">all work →</Link>
        </div>
        <div className="preview-grid">
          {projects.slice(0, 3).map((project) => (
            <Link key={project.slug} className="preview-card glass" to={`/work/${project.slug}`}>
              <span className="pid">{project.code}</span>
              <h3>{project.title}</h3>
              <p>{project.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
