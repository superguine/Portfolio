const icons = {
  python: (
    <g>
      <rect x="7" y="5" width="10" height="14" rx="5" />
      <rect x="11" y="9" width="10" height="14" rx="5" opacity=".55" />
      <circle cx="11" cy="9" r="1.1" fill="currentColor" />
      <circle cx="17" cy="19" r="1.1" fill="currentColor" />
    </g>
  ),
  js: (
    <g>
      <rect x="6" y="6" width="20" height="20" rx="3" />
      <path
        d="M13 11v9.2c0 2.2-1.1 3.3-3.2 3.3-.6 0-1.4-.1-2-.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M17 14.2c.7-1.2 1.9-1.8 3.3-1.8 2 0 3.2 1.1 3.2 2.8 0 1.9-1.7 2.6-3.4 3.3l-.8.3c-1 .4-1.4.8-1.4 1.5 0 .7.6 1.2 1.7 1.2 1.2 0 2.1-.5 2.8-1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </g>
  ),
  html: (
    <g>
      <path d="M8 6h16l-1.4 18L16 27l-6.6-3L8 6z" />
      <path d="M11.2 9.5h9.6l-.3 3.2H14l.2 2.2h6.1l-.6 6.4L16 22.4l-3.6-1.1-.2-2.4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </g>
  ),
  java: (
    <g>
      <path d="M12 20c2.4 1.6 7.2 1.6 9.2-.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 22.4c3 1.8 8.6 1.7 10.8-.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16.4 7.2c-1.8 2 4.8 3.2 0 6.2 3.6-2 3.2-5.8 0-6.2z" />
      <path d="M10.5 24.8h11" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </g>
  ),
  c: (
    <g>
      <circle cx="16" cy="16" r="8.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M19.6 11.6a6 6 0 1 0 0 8.8" fill="none" stroke="currentColor" strokeWidth="2" />
    </g>
  ),
  android: (
    <g>
      <path d="M11 14h10v8.5a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V14z" />
      <path d="M12.5 12.2a3.5 3.5 0 0 1 7 0" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11.2 10.2l-1.4-2.2M20.8 10.2l1.4-2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="16" width="2" height="5" rx="1" />
      <rect x="21" y="16" width="2" height="5" rx="1" />
    </g>
  ),
  linux: (
    <g>
      <ellipse cx="16" cy="15" rx="5.4" ry="6.4" />
      <ellipse cx="14.2" cy="14" rx="1" ry="1.3" fill="currentColor" />
      <ellipse cx="17.8" cy="14" rx="1" ry="1.3" fill="currentColor" />
      <path d="M12 21.5c1.2 2 6.8 2 8 0" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 19.2c-1.6.6-2.6 1.8-2.2 2.8M21.5 19.2c1.6.6 2.6 1.8 2.2 2.8" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </g>
  ),
  opencv: (
    <g>
      <circle cx="12" cy="13" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="20" cy="13" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="20.2" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </g>
  ),
  tf: (
    <g>
      <path d="M7 8h18M16 8v16M16 14l7 4M16 14l-7 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </g>
  ),
  arduino: (
    <g>
      <rect x="5" y="11" width="22" height="10" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="16" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="16" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 16h8" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </g>
  ),
}

export default function ToolIcon({ id, size = 28 }) {
  return (
    <svg
      className="tool-icon"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1.2"
        y="1.2"
        width="29.6"
        height="29.6"
        rx="8"
        fill="rgba(232,160,74,0.08)"
        stroke="rgba(232,160,74,0.35)"
      />
      <g fill="rgba(232,160,74,0.92)" stroke="rgba(244,235,224,0.15)">
        {icons[id]}
      </g>
    </svg>
  )
}
