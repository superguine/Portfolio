import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../content'

export default function Project() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/work" replace />
  }

  return (
    <div className="page project">
      <Link className="back" to="/work">
        ← work
      </Link>
      <article className="project-detail glass">
        <p className="kicker">
          {project.code} · {project.domains.join(' / ')}
        </p>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
        <p className="body-copy">{project.body}</p>
        <div className="tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.repo ? (
          <a className="btn primary" href={project.repo} target="_blank" rel="noreferrer">
            github repo
          </a>
        ) : (
          <p className="note">Repo not published yet.</p>
        )}
      </article>
    </div>
  )
}
