(function () {
  const SECTIONS = [
    { id: 'about', label: 'About Me', icon: 'pirate' },
    { id: 'ctfs', label: 'CTFs & Events', icon: 'flag' },
    { id: 'projects', label: 'Projects & Tools', icon: 'chest' },
    { id: 'certs', label: 'Certs', icon: 'scroll' }
  ];

  function data() {
    return window.SITE_DATA || {};
  }

  function esc(value) {
    return String(value === undefined || value === null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function icon(name, scale) {
    if (!window.PIXEL_ART) return '';
    return window.PIXEL_ART.sprite(name || 'scroll', scale || 3, '');
  }

  function external(url, label, className) {
    if (!url) return '';
    return '<a class="' + (className || 'text-link') + '" href="' + esc(url) +
      '" target="_blank" rel="noopener noreferrer">' + label + '</a>';
  }

  function sectionUrl(id) {
    return 'index.html#' + id;
  }

  function count(kind) {
    const d = data();
    if (kind === 'ctfs') return (d.ctfs || []).length;
    if (kind === 'challenges') {
      return (d.ctfs || []).reduce(function (total, item) {
        return total + ((item.challenges || []).length);
      }, 0);
    }
    if (kind === 'projects') return (d.projects || []).length;
    if (kind === 'tools') return (d.tools || []).length;
    if (kind === 'certs') return (d.certs || []).length;
    return 0;
  }

  function renderShell(activeSection) {
    const d = data();
    const site = d.site || {};
    const brandName = document.getElementById('brand-name');
    const brandSub = document.getElementById('brand-sub');
    const brandMark = document.getElementById('brand-mark');
    const tabs = document.getElementById('tabs');
    const footerBrand = document.getElementById('footer-brand');
    const footerLinks = document.getElementById('footer-links');

    if (brandName) brandName.textContent = site.name || 'Your Name';
    if (brandSub) brandSub.textContent = site.handle || '';
    if (brandMark) {
      brandMark.innerHTML = site.brandImage
        ? '<img class="brand-photo" src="' + esc(site.brandImage) + '" alt="' + esc(site.brandImageAlt || '') + '">'
        : icon('flag', 2);
    }
    if (footerBrand) footerBrand.textContent = site.name || 'Your Name';

    if (tabs) {
      const sectionIcons = site.sectionIcons || {};
      tabs.innerHTML = SECTIONS.map(function (section) {
        return '<a class="tab' + (section.id === activeSection ? ' active' : '') + '" href="' +
          sectionUrl(section.id) + '">' + icon(sectionIcons[section.id] || section.icon, 2) +
          '<span>' + esc(section.label) + '</span></a>';
      }).join('');
    }

    if (footerLinks) {
      footerLinks.innerHTML = (site.socials || []).map(function (social) {
        return external(social.url, esc(social.label));
      }).join('');
    }
  }

  function setTitle(suffix) {
    const site = data().site || {};
    document.title = (site.name || 'Pixel Quest Log') + (suffix ? ' | ' + suffix : '');
  }

  window.COMMON = {
    sections: SECTIONS,
    data: data,
    esc: esc,
    icon: icon,
    external: external,
    sectionUrl: sectionUrl,
    count: count,
    renderShell: renderShell,
    setTitle: setTitle
  };
})();
