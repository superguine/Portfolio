function esc(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function renderCodeField() {
  const field = document.getElementById('codeField');
  const lanes = codeLanes
    .map((line, i) => {
      const dur = 28 + i * 7;
      const delay = -i * 4;
      const top = 10 + i * 14;
      return `<div class="code-lane lane-${i % 3}" style="--dur:${dur}s;--delay:${delay}s;top:${top}%">
        <span>${esc(line)}</span><span>${esc(line)}</span>
      </div>`;
    })
    .join('');
  field.innerHTML = lanes + '<div class="glass-veil"></div>';
}

function renderHeader() {
  document.getElementById('brandName').textContent = profile.name;
  document.getElementById('brandTitle').textContent = '~/sys · ' + profile.title.toLowerCase();
  document.getElementById('mailChip').href = 'mailto:' + profile.email;
}

function renderFooter() {
  document.getElementById('ghLink').href = profile.github;
  document.getElementById('ghLink').textContent = 'github/' + profile.handle;
  document.getElementById('liLink').href = profile.linkedin;
  document.getElementById('emailBtn').textContent = profile.email;
}

async function copyEmail(btn) {
  try {
    await navigator.clipboard.writeText(profile.email);
  } catch {
    window.location.href = 'mailto:' + profile.email;
    return;
  }
  const original = btn.textContent;
  btn.textContent = btn.dataset.copiedLabel || 'copied';
  setTimeout(() => { btn.textContent = original; }, 1800);
}

function setActiveNav(route) {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('on', link.dataset.route === route);
  });
}

function pageHome() {
  const areasHtml = areas
    .map(
      (a) => `<article class="area glass">
        <header><span class="pid">mod/${esc(a.label)}</span><h2>${esc(a.label)}</h2></header>
        <p>${esc(a.hint)}</p>
        <ul>${a.tools.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </article>`
    )
    .join('');

  const toolsHtml = tools
    .map(
      (t) => `<li class="tool-cell">
        ${toolIcon(t.id)}
        <span>${esc(t.name)}</span>
        ${t.note ? `<small>${esc(t.note)}</small>` : ''}
      </li>`
    )
    .join('');

  const previewHtml = projects
    .slice(0, 3)
    .map(
      (p) => `<a class="preview-card glass" href="#/work/${p.slug}">
        <span class="pid">${p.code}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.tagline)}</p>
      </a>`
    )
    .join('');

  return `<div class="page home">
    <section class="hero glass">
      <p class="prompt">
        <span class="prompt-user">shawon@workstation</span>
        <span class="prompt-path">:~</span>
        <span class="prompt-cmd">$ whoami</span>
        <span class="caret"></span>
      </p>
      <p class="kicker">software engineer · backend · frontend · ml</p>
      <h1>${esc(profile.name)}<span class="h-sub">${esc(profile.pitch)}</span></h1>
      <div class="hero-actions">
        <a class="btn primary" href="#/work">open work</a>
        <button type="button" class="btn" data-copied-label="email copied" onclick="copyEmail(this)">copy email</button>
      </div>
    </section>

    <section class="areas">${areasHtml}</section>

    <section class="dock glass">
      <div class="dock-head">
        <h2>tools on path</h2>
        <p>icons for the stack I actually use — recent work sits toward the left.</p>
      </div>
      <ul class="tool-grid">${toolsHtml}</ul>
    </section>

    <section class="preview">
      <div class="preview-head">
        <h2>selected processes</h2>
        <a href="#/work">all work →</a>
      </div>
      <div class="preview-grid">${previewHtml}</div>
    </section>
  </div>`;
}

function pageWork() {
  const rows = projects
    .map(
      (p) => `<li>
        <a class="project-row glass" href="#/work/${p.slug}">
          <span class="pid">${p.code}</span>
          <div>
            <h2>${esc(p.title)}</h2>
            <p>${esc(p.tagline)}</p>
            <div class="tags">${p.stack.map((s) => `<span>${esc(s)}</span>`).join('')}</div>
          </div>
          <span class="go">open</span>
        </a>
      </li>`
    )
    .join('');

  return `<div class="page work">
    <header class="page-hero glass">
      <p class="kicker">ls ./work</p>
      <h1>Things I have actually built</h1>
      <p>Hardware, a deployed detector, a handheld ESP32 device, and a tray of Python desktop utilities.</p>
    </header>
    <ul class="project-list">${rows}</ul>
  </div>`;
}

function pageAbout() {
  const interestHtml = interests
    .map((i) => `<article class="interest glass"><h2>${esc(i.label)}</h2><p>${esc(i.detail)}</p></article>`)
    .join('');

  return `<div class="page about">
    <header class="page-hero glass">
      <p class="kicker">cat ./about.md</p>
      <h1>About</h1>
      <p class="body-copy">${esc(profile.bio)}</p>
    </header>

    <section class="interest-grid">${interestHtml}</section>

    <section class="contact glass">
      <h2>socials &amp; mail</h2>
      <p>Email is the door. GitHub and LinkedIn are the paper trail.</p>
      <div class="hero-actions">
        <a class="btn primary" href="mailto:${esc(profile.email)}">write email</a>
        <button type="button" class="btn" data-copied-label="copied" onclick="copyEmail(this)">copy address</button>
        <a class="btn" href="${esc(profile.github)}" target="_blank" rel="noreferrer">github</a>
        <a class="btn" href="${esc(profile.linkedin)}" target="_blank" rel="noreferrer">linkedin</a>
      </div>
    </section>
  </div>`;
}

function pageProject(slug) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    window.location.hash = '#/work';
    return '';
  }
  const repoHtml = project.repo
    ? `<a class="btn primary" href="${esc(project.repo)}" target="_blank" rel="noreferrer">github repo</a>`
    : `<p class="note">Repo not published yet.</p>`;

  return `<div class="page project">
    <a class="back" href="#/work">← work</a>
    <article class="project-detail glass">
      <p class="kicker">${project.code} · ${project.domains.join(' / ')}</p>
      <h1>${esc(project.title)}</h1>
      <p class="lede">${esc(project.summary)}</p>
      <p class="body-copy">${esc(project.body)}</p>
      <div class="tags">${project.stack.map((s) => `<span>${esc(s)}</span>`).join('')}</div>
      ${repoHtml}
    </article>
  </div>`;
}

function router() {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const main = document.getElementById('main');
  window.scrollTo(0, 0);

  const projectMatch = hash.match(/^\/work\/([^/]+)$/);

  if (hash === '/' || hash === '') {
    main.innerHTML = pageHome();
    setActiveNav('/');
  } else if (hash === '/work') {
    main.innerHTML = pageWork();
    setActiveNav('/work');
  } else if (hash === '/about') {
    main.innerHTML = pageAbout();
    setActiveNav('/about');
  } else if (projectMatch) {
    main.innerHTML = pageProject(projectMatch[1]);
    setActiveNav('/work');
  } else {
    window.location.hash = '#/';
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  renderCodeField();
  renderHeader();
  renderFooter();
  router();
});
