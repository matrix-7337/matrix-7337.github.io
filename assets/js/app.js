(function () {
  const C = window.COMMON;
  const d = C.data();
  const site = d.site || {};
  const panel = document.getElementById('panel');
  let currentFilter = 'all';

  function statValue(stat) {
    if (stat.countOf) return C.count(stat.countOf);
    return stat.value !== undefined ? stat.value : '';
  }

  function panelHead(title, kicker, iconName, note) {
    return '<div class="panel-head"><div class="panel-title">' +
      C.icon(iconName || 'scroll', 3) +
      '<div><h2>' + C.esc(title) + '</h2><div class="panel-kicker">' + C.esc(kicker || '') + '</div></div>' +
      '</div></div>' + (note ? '<p class="panel-note" style="padding:0 26px;margin-top:16px">' + C.esc(note) + '</p>' : '');
  }

  function renderAbout() {
    const about = d.about || {};

    let html = '<section class="panel-shell">' + panelHead(about.heading || 'The tale so far', 'Chapter I · The traveler', 'pirate');
    html += '<div class="panel-body"><div class="about-grid">';

    const portrait = site.pfp
      ? '<img class="character-photo" src="' + C.esc(site.pfp) + '" alt="' + C.esc(site.pfpAlt || ((site.name || '') + ' portrait')) + '">'
      : C.icon('pirate', 8);

    html += '<div><div class="character-card">' + portrait +
      '<div class="character-name">' + C.esc(site.name || 'YOUR NAME') + '</div>' +
      '<div class="character-tag">' + C.esc(site.title || '') + '</div>' +
      '</div></div>';

    html += '<div class="about-copy">';
    html += (about.paragraphs || []).map(function (p) { return '<p>' + C.esc(p) + '</p>'; }).join('');

    html += '<div class="stat-grid">' + (site.stats || []).map(function (stat) {
      return '<div class="stat">' + C.icon(stat.icon || 'coin', 2) +
        '<span class="stat-value">' + C.esc(statValue(stat)) + '</span>' +
        '<span class="stat-label">' + C.esc(stat.label) + '</span></div>';
    }).join('') + '</div>';

    html += '<div class="fact-grid">' + (about.facts || []).map(function (fact) {
      return '<div class="fact">' + C.icon(fact.icon || 'compass', 2) +
        '<div><span class="fact-label">' + C.esc(fact.label) + '</span>' +
        '<span class="fact-value">' + C.esc(fact.value) + '</span></div></div>';
    }).join('') + '</div>';

    html += '<div class="section-label">Equipped with</div><div class="chip-row">' +
      (site.skills || []).map(function (skill) { return '<span class="chip">' + C.esc(skill) + '</span>'; }).join('') +
      '</div>';

    html += '<div class="section-label">Find me across the seas</div><div class="social-grid">' +
      (site.socials || []).map(function (social) {
        const inner = '<span class="card-icon">' + C.icon(social.icon || 'key', 3) + '</span>' +
          '<span class="social-text"><span class="social-name">' + C.esc(social.label) + '</span>' +
          '<span class="social-hint">Visit profile</span></span>' +
          '<span class="social-arrow">&#8599;</span>';
        return C.external(social.url, inner, 'social-box');
      }).join('') + '</div>';

    html += '</div></div></div></section>';
    return html;
  }

  function filterButtons() {
    const items = d.ctfs || [];
    const years = [];
    items.forEach(function (item) {
      const year = String(item.date || '').slice(0, 4);
      if (year && years.indexOf(year) === -1) years.push(year);
    });
    const options = [{ value: 'all', label: 'All Quests' }, { value: 'CTF', label: 'CTFs' }, { value: 'Event', label: 'Events' }];
    years.forEach(function (year) { options.push({ value: year, label: year }); });
    return options.map(function (option) {
      return '<button class="filter-btn' + (currentFilter === option.value ? ' active' : '') +
        '" data-filter="' + C.esc(option.value) + '">' + C.esc(option.label) + '</button>';
    }).join('');
  }

  function ctfCard(item) {
    const theme = document.documentElement.getAttribute('data-theme') === 'noir' ? 'noir' : 'red';
    const href = 'ctf.html?id=' + encodeURIComponent(item.id || '') + '&theme=' + theme;
    let html = '<article class="scroll-card clickable" data-href="' + C.esc(href) + '" tabindex="0" role="link" aria-label="Open ' + C.esc(item.title) + '">';
    if (item.placement) html += '<div class="card-ribbon">' + C.esc(item.placement) + '</div>';
    html += '<div class="card-top"><div class="card-icon">' + C.icon(item.icon || 'flag', 3) + '</div><div>' +
      '<h3 class="card-title">' + C.esc(item.title) + '</h3>' +
      '<div class="card-meta">' + C.esc(item.dateLabel || item.date || '') +
      (item.organizer ? ' · ' + C.esc(item.organizer) : '') + '</div>' +
      '<div class="card-meta">' + C.esc(item.kind || 'CTF') + (item.category ? ' · ' + C.esc(item.category) : '') + '</div>' +
      '</div></div>';
    html += '<p class="card-summary">' + C.esc(item.summary || '') + '</p>';
    html += '<div class="tag-row">' + (item.tags || []).map(function (tag) {
      return '<span class="tag">' + C.esc(tag) + '</span>';
    }).join('') + '</div>';
    if (item.score || item.rank) {
      html += '<div class="card-stats">';
      if (item.score) html += '<div><span class="card-stat-label">Score</span><span class="card-stat-value">' + C.esc(item.score) + '</span></div>';
      if (item.rank) html += '<div><span class="card-stat-label">Rank</span><span class="card-stat-value">' + C.esc(item.rank) + '</span></div>';
      html += '<div><span class="card-stat-label">Writeups</span><span class="card-stat-value">' + (item.challenges || []).length + '</span></div>';
      html += '</div>';
    }
    html += '<div class="card-foot"><span class="card-stat-label">' + (item.challenges || []).length + ' challenges mapped</span>' +
      '<span class="btn btn-small">Open scroll ' + C.icon('book', 2) + '</span></div>';
    html += '</article>';
    return html;
  }

  function renderCtfs() {
    let html = '<section class="panel-shell">' + panelHead('CTFs & Events', 'Chapter II · Battles fought and flags captured', 'flag');
    html += '<div class="panel-body"><div class="filter-row">' + filterButtons() + '</div>';
    const items = (d.ctfs || []).filter(function (item) {
      if (currentFilter === 'all') return true;
      if (currentFilter === 'CTF' || currentFilter === 'Event') return (item.kind || 'CTF') === currentFilter;
      return String(item.date || '').slice(0, 4) === currentFilter;
    });
    html += items.length
      ? '<div class="card-grid">' + items.map(ctfCard).join('') + '</div>'
      : '<div class="empty-state">No quests found in this part of the map.</div>';
    html += '</div></section>';
    return html;
  }

  function projectCard(item) {
    const statusClass = /progress/i.test(item.status || '') ? 'progress' : /archiv/i.test(item.status || '') ? 'archived' : '';
    let html = '<article class="scroll-card"><div class="card-top"><div class="card-icon">' + C.icon(item.icon || 'chest', 3) + '</div><div>' +
      '<h3 class="card-title">' + C.esc(item.name) + '</h3>' +
      '<div class="card-meta">' + C.esc(item.year || '') + (item.year && item.status ? ' · ' : '') + C.esc(item.status || '') + '</div>' +
      '</div></div>';
    html += '<p class="card-summary"><strong>' + C.esc(item.summary || '') + '</strong></p>';
    if (item.description) html += '<p class="card-summary">' + C.esc(item.description) + '</p>';
    html += '<div class="tag-row">' + (item.tags || []).map(function (tag) {
      return '<span class="tag">' + C.esc(tag) + '</span>';
    }).join('') + '</div>';
    const links = item.links || {};
    html += '<div class="card-foot"><div class="link-line">' +
      C.external(links.demo, 'Live demo') +
      C.external(links.repo, 'Source') +
      C.external(links.article, 'Article') +
      '</div><span class="status-badge ' + statusClass + '">' + C.esc(item.status || 'Done') + '</span></div>';
    html += '</article>';
    return html;
  }

  function renderProjects() {
    const projects = d.projects || [];
    const tools = d.tools || [];
    let html = '<section class="panel-shell">' + panelHead('Projects & Tools', 'Chapter III · Things forged in the workshop', 'chest');
    html += '<div class="panel-body">';
    html += '<div class="section-label">Forge » ' + projects.length + ' creations</div>';
    html += projects.length
      ? '<div class="card-grid">' + projects.map(projectCard).join('') + '</div>'
      : '<div class="empty-state">The workshop is empty for now.</div>';
    html += '<div class="section-label">Tool belt » ' + tools.length + ' trusted tools</div>';
    html += tools.length
      ? '<div class="tools-grid">' + tools.map(function (tool) {
          const inner = '<div class="card-icon" style="width:40px;height:40px;box-shadow:2px 2px 0 rgba(42,16,30,.7)">' +
            C.icon(tool.icon || 'key', 2) + '</div><div><div class="tool-name">' + C.esc(tool.name) + '</div>' +
            '<div class="tool-summary">' + C.esc(tool.summary || '') + '</div>' +
            '<span class="tool-tag">' + C.esc(tool.tag || '') + '</span></div>';
          return tool.link
            ? '<a class="tool-card" href="' + C.esc(tool.link) + '" target="_blank" rel="noopener noreferrer">' + inner + '</a>'
            : '<div class="tool-card">' + inner + '</div>';
        }).join('') + '</div>'
      : '<div class="empty-state">No tools listed.</div>';
    html += '</div></section>';
    return html;
  }

  function renderCerts() {
    const certs = d.certs || [];
    let html = '<section class="panel-shell">' + panelHead('Certifications', 'Chapter IV · Sealed scrolls and earned seals', 'scroll');
    html += '<div class="panel-body">';
    html += certs.length
      ? '<div class="cert-grid">' + certs.map(function (cert) {
          let out = '<article class="cert-card"><div class="seal">' + C.icon(cert.icon || 'scroll', 2) + '</div>';
          out += '<h3 class="cert-title">' + C.esc(cert.name) + '</h3>';
          out += '<div class="cert-issuer">' + C.esc(cert.issuer || '') + '</div>';
          out += '<p class="cert-summary">' + C.esc(cert.summary || '') + '</p>';
          out += '<div class="cert-meta">ISSUED ' + C.esc(cert.date || '') + '<br>ID ' + C.esc(cert.credentialId || '') + '</div>';
          out += '<div class="card-foot"><span class="tag">' + C.esc(cert.tag || '') + '</span>' +
            C.external(cert.link, 'Verify seal') + '</div></article>';
          return out;
        }).join('') + '</div>'
      : '<div class="empty-state">No sealed scrolls yet.</div>';
    html += '</div></section>';
    return html;
  }

  function activeSection() {
    const hash = window.location.hash.replace('#', '');
    const ids = C.sections.map(function (section) { return section.id; });
    return ids.indexOf(hash) !== -1 ? hash : 'about';
  }

  function render() {
    const section = activeSection();
    if (window.location.hash.replace('#', '') !== section) {
      history.replaceState(null, '', '#' + section);
    }
    C.renderShell(section);
    C.setTitle(C.sections.find(function (s) { return s.id === section; }).label);
    if (section === 'about') panel.innerHTML = renderAbout();
    if (section === 'ctfs') panel.innerHTML = renderCtfs();
    if (section === 'projects') panel.innerHTML = renderProjects();
    if (section === 'certs') panel.innerHTML = renderCerts();
  }

  panel.addEventListener('click', function (event) {
    const filter = event.target.closest('[data-filter]');
    if (filter) {
      currentFilter = filter.dataset.filter;
      render();
      return;
    }
    const card = event.target.closest('[data-href]');
    if (card && !event.target.closest('a')) {
      window.location.href = card.dataset.href;
    }
  });

  panel.addEventListener('keydown', function (event) {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-href]')) {
      event.preventDefault();
      window.location.href = event.target.dataset.href;
    }
  });

  window.addEventListener('hashchange', render);

  render();
})();
