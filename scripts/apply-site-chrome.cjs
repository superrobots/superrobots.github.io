/* Run when the shared masthead changes; preserves page content and game logic. */
const fs = require('node:fs');
const path = require('node:path');
const header = require('./site-header.cjs');
const root = path.resolve(__dirname,'..');
for(const name of fs.readdirSync(root).filter(name=>name.endsWith('.html')&&name!=='index.html')) {
    const active = name==='team.html'?'Our team':name==='tutorials.html'||name.startsWith('article-')?'Tutorials':'Learn & play';
    let html = fs.readFileSync(path.join(root,name),'utf8');
    html = html.replace(/<header(?:\s[^>]*)?>[\s\S]*?<\/header>/,header('',active));
    html = html.replace(/<div class="workspace-toolbar">[\s\S]*?<\/div><!-- workspace-toolbar -->\s*/, '');
    if(name==='game.html'||name==='dungeon.html') {
        const dungeon = name==='dungeon.html';
        const toolbar = `<div class="workspace-toolbar"><h1>${dungeon?'Cyber Dungeon':'SuperRobots Block Game'}</h1><div class="workspace-actions">${dungeon?'<button type="button" onclick="showCampaignMap()">Game map</button>':''}<div class="audio-controls"><button type="button" aria-label="Toggle background music" onclick="AudioEngine.toggleMusic()">Music</button><label for="music-volume">Volume</label><input id="music-volume" aria-label="Music volume" type="range" min="0" max="1" step="0.1" value="0.5" onchange="AudioEngine.setVolume(this.value)"></div><a href="${dungeon?'game.html':'dungeon.html'}">${dungeon?'Block Game':'Cyber Dungeon'} →</a><a href="simulator.html">3D Simulator ↗</a></div></div><!-- workspace-toolbar -->`;
        html = html.replace('</header>','</header>\n'+toolbar);
    }
    // Existing inline colors are page-specific leftovers from the previous theme.
    html = html.replace(/(<style>[\s\S]*?<\/style>|style="[^"]*")/g,part=>part.replace(/#245cce|#7042bd|#38bdf8/gi,'#b3422d').replace(/#172b3a/gi,'#202824').replace(/#526474|#94a3b8/gi,'#626b64'));
    html = html.replace(/font-family: 'Outfit', sans-serif; font-size: 2.5rem/g,"font-family: var(--font-editorial); font-weight: 400; font-size: 2.5rem");
    fs.writeFileSync(path.join(root,name),html);
}
console.log('Updated learning, tutorial, team, and game mastheads.');
