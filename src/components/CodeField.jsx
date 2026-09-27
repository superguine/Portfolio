import { codeLanes } from '../content'

export default function CodeField() {
  return (
    <div className="code-field" aria-hidden="true">
      {codeLanes.map((line, i) => (
        <div
          key={line}
          className={`code-lane lane-${i % 3}`}
          style={{
            '--dur': `${28 + i * 7}s`,
            '--delay': `${-i * 4}s`,
            top: `${10 + i * 14}%`,
          }}
        >
          <span>{line}</span>
          <span>{line}</span>
        </div>
      ))}
      <div className="glass-veil" />
    </div>
  )
}
