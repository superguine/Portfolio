import { Link } from 'react-router-dom'
import { projects } from '../content'

export default function Work() {
  return (
    <div className="page work">
      <header className="page-hero glass">
        <p className="kicker">ls ./work</p>
        <h1>Things I have actually built</h1>
        <p>
          Hardware, a deployed detector, a handheld ESP32 device, and a tray of
          Python desktop utilities.
        </p>
      </header>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link className="project-row glass" to={`/work/${project.slug}`}>
              <span className="pid">{project.code}</span>
              <div>
                <h2>{project.title}</h2>
                <p>{project.tagline}</p>
                <div className="tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <span className="go">open</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
