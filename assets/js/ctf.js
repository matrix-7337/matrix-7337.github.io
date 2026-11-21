(function () {
  const C = window.COMMON;
  const d = C.data();
  const root = document.getElementById('detail');
  const id = new URLSearchParams(window.location.search).get('id');
  const item = (d.ctfs || []).find(function (entry) { return entry.id === id; });

  C.renderShell('ctfs');

  if (!item) {
    C.setTitle('Quest not found');
    root.innerHTML = '<section class="panel-shell"><div class="panel-body empty-state">' +
      C.icon('skull', 4) + '<p class="card-title">This scroll is missing</p>' +
      '<p>No quest was found with that id. It may have been moved or renamed.</p>' +
      '<a class="btn" href="' + C.sectionUrl('ctfs') + '">Return to the quest log</a></div></section>';
    return;
  }

  C.setTitle(item.title || 'CTF details');

  function metaBox(label, value) {
    if (!value) return '';
    return '<div class="meta-box"><span class="card-stat-label">' + C.esc(label) + '</span>' +
      '<span class="card-stat-value">' + C.esc(value) + '</span></div>';
  }

  function challengeRow(challenge, index) {
    const link = challenge.link;
    const inner = '<div class="challenge-icon">' + C.icon(challenge.icon || 'flag', 3) + '</div>' +
      '<div><h3 class="challenge-name">' + String(index + 1).padStart(2, '0') + ' · ' + C.esc(challenge.name) + '</h3>' +
      '<p class="challenge-summary">' + C.esc(challenge.summary || '') + '</p>' +
      '<div class="tag-row"><span class="tag">' + C.esc(challenge.category || 'Challenge') + '</span>' +
      (challenge.difficulty ? '<span class="difficulty ' + C.esc(String(challenge.difficulty).toLowerCase()) + '">' +
        C.esc(challenge.difficulty) + '</span>' : '') + '</div></div>' +
      '<div class="challenge-side">' +
      (challenge.points ? '<span class="points">' + C.esc(challenge.points) + ' pts</span>' : '') +
      (link ? '<span class="btn btn-small">Read writeup ' + C.icon('book', 2) + '</span>' : '') +
      '</div>';

    if (link) {
      return '<a class="challenge" href="' + C.esc(link) + '" target="_blank" rel="noopener noreferrer">' + inner + '</a>';
    }
    return '<div class="challenge">' + inner + '</div>';
  }

  let html = '<a class="breadcrumb" href="' + C.sectionUrl('ctfs') + '">&#8592; Back to the quest log</a>';

  html += '<div class="detail-banner"><div class="detail-icon">' + C.icon(item.icon || 'flag', 4) + '</div><div>' +
    '<h1>' + C.esc(item.title) + '</h1>' +
    '<p>' + C.esc(item.kind || 'CTF') + (item.category ? ' · ' + C.esc(item.category) : '') +
    (item.dateLabel || item.date ? ' · ' + C.esc(item.dateLabel || item.date) : '') + '</p>' +
    '</div></div>';

  html += '<div class="detail-meta">' +
    metaBox('Organizer', item.organizer) +
    metaBox('Placement', item.placement) +
    metaBox('Score', item.score) +
    metaBox('Rank', item.rank) +
    '</div>';

  const links = item.links || {};
  const linkButtons = [
    C.external(links.writeups, 'All writeups', 'btn btn-small'),
    C.external(links.event, 'Event page', 'btn btn-small btn-secondary'),
    C.external(links.certificate, 'Certificate', 'btn btn-small btn-secondary')
  ].filter(Boolean).join('');

  html += '<section class="panel-shell" style="margin-top:24px">' + panelHeadLocal('Battle report', 'What happened on this quest') + '<div class="panel-body">';
  html += '<p class="panel-note" style="margin-top:0">' + C.esc(item.summary || '') + '</p>';
  if ((item.details || []).length) {
    html += '<ul>' + item.details.map(function (line) {
      return '<li style="font-size:21px;margin-bottom:6px">' + C.esc(line) + '</li>';
    }).join('') + '</ul>';
  }
  if (linkButtons) html += '<div class="panel-actions" style="margin-top:18px">' + linkButtons + '</div>';
  html += '</div></section>';

  const challenges = item.challenges || [];
  html += '<section class="panel-shell">' + panelHeadLocal('Treasure chest', challenges.length + ' challenge writeups') + '<div class="panel-body">';
  html += challenges.length
    ? '<div class="challenge-list">' + challenges.map(challengeRow).join('') + '</div>'
    : '<div class="empty-state">No challenge writeups have been added to this quest yet.</div>';
  html += '</div></section>';

  const related = (d.ctfs || []).filter(function (entry) { return entry.id !== item.id; }).slice(0, 3);
  const theme = document.documentElement.getAttribute('data-theme') === 'noir' ? 'noir' : 'red';
  if (related.length) {
    html += '<section class="panel-shell">' + panelHeadLocal('Other maps', 'More quests in the archive') + '<div class="panel-body"><div class="related-grid">' +
      related.map(function (entry) {
        return '<a class="related-card" href="ctf.html?id=' + encodeURIComponent(entry.id) + '&theme=' + theme + '">' +
          C.icon(entry.icon || 'flag', 2) + '<span class="related-title">' + C.esc(entry.title) + '</span></a>';
      }).join('') + '</div></div></section>';
  }

  root.innerHTML = html;

  function panelHeadLocal(title, kicker) {
    return '<div class="panel-head"><div class="panel-title">' + C.icon('map', 3) +
      '<div><h2>' + C.esc(title) + '</h2><div class="panel-kicker">' + C.esc(kicker) + '</div></div></div></div>';
  }
})();
