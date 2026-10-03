/* One static masthead shared by generated news and existing site pages. */
const brand = `<span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="7" width="14" height="12" rx="3"/><path d="M12 7V3M3 12H5M19 12H21M9 15H15"/><circle cx="9" cy="11" r=".8" fill="currentColor"/><circle cx="15" cy="11" r=".8" fill="currentColor"/></svg></span>SuperRobots`;
module.exports = function header(prefix='', active='News') {
    const links = [['News','index.html'],['Learn & play','learn.html'],['Tutorials','tutorials.html'],['Our team','team.html']];
    return `<header class="masthead site-header"><div class="masthead-inner"><a class="brand" href="${prefix}index.html" aria-label="SuperRobots home">${brand}</a><nav aria-label="Main navigation">${links.map(([label,file],index)=>`${index===3?'<span class="nav-divider" aria-hidden="true"></span>':''}<a href="${prefix}${file}"${label===active?' aria-current="page"':''}>${label.replace('&','&amp;')}${index===3?' ↗':''}</a>`).join('')}</nav></div></header>`;
};
