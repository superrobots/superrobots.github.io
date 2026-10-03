/* Reviewed evergreen references. Rebuilt alongside the newsroom. */
const fs = require('node:fs');
const path = require('node:path');
const header = require('./site-header.cjs');
const root = path.resolve(__dirname, '..');
const reviewed = '2026-10-02';
const guides = [
  { id: 'chinese-humanoid-robot-companies', title: 'Chinese humanoid robot companies: a starter guide', summary: 'Meet Unitree, AgiBot, UBTECH, and LimX Dynamics, and learn how to compare their robots and deployment claims.', stories: ['agibot-chimelong','agibot-music','limx-tennis','guangzhou-robot-show'], body: `
<p>China’s humanoid robotics scene spans research platforms, industrial machines, and robots designed for public interaction. This selective directory introduces four companies with official product information available in English. It is a starting point for research, not a market-share ranking or a complete list.</p>
<h2>Four companies to know</h2>
<div class="guide-table"><table><caption>Selected companies and where to begin your research</caption><thead><tr><th scope="col">Company</th><th scope="col">Product examples</th><th scope="col">Research starting point</th></tr></thead><tbody>
<tr><th scope="row">Unitree</th><td>G1 and G1+ humanoids</td><td>Compare configurations, sensors, and developer access.</td></tr>
<tr><th scope="row">AgiBot / AGIBOT</th><td>A, X, and G robot families</td><td>Distinguish interaction, motion, and manipulation use cases.</td></tr>
<tr><th scope="row">UBTECH</th><td>Walker S industrial and Walker C commercial families</td><td>Look for evidence of repeatable work in the intended setting.</td></tr>
<tr><th scope="row">LimX Dynamics</th><td>Oli and Luna humanoids; TRON research platforms</td><td>Separate humanoid products from other embodied robot designs.</td></tr>
</tbody></table></div>
<p>Product examples come from <a href="https://www.unitree.com/g1/">Unitree</a>, <a href="https://www.agibot.com/article/231/detail/30.html">AGIBOT’s portfolio announcement</a>, <a href="https://www.ubtrobot.com/en/">UBTECH</a>, and <a href="https://www.limxdynamics.com/en">LimX Dynamics</a>. These are manufacturer descriptions, rather than independent performance evaluations.</p>
<h2>How to compare companies fairly</h2>
<p>Start with the job, not the robot’s appearance. A machine that welcomes visitors faces different demands from one that moves parts in a factory. Walking, conversation, and reliable manipulation are separate capabilities; success at one does not establish the others.</p>
<p>Ask what the evidence actually shows. An edited demonstration illustrates a possibility. A customer trial tests a particular workflow. A recurring deployment can provide stronger evidence, but only if operating conditions, human assistance, and failures are described. A shipment count alone does not tell you how much useful work a robot performs.</p>
<h2>A checklist for your next announcement</h2>
<ul><li>Which exact model and configuration were used?</li><li>Was it autonomous, remotely operated, scripted, or a mixture?</li><li>How many attempts succeeded, and over what period?</li><li>What preparation or human intervention was required?</li><li>Can customers use the demonstrated feature today?</li></ul>
<p>Record unanswered questions rather than filling them with assumptions. This makes comparisons more useful as new evidence arrives.</p>
<h2>Keep exploring</h2><p>Read our <a href="unitree-g1-vs-g1-plus.html">G1 versus G1+ comparison</a> for a concrete hardware example, or learn <a href="what-is-embodied-ai.html">what embodied AI means</a>. For deployment reporting, see <a href="../news/agibot-chimelong.html">AgiBot’s theme-park announcement</a> and <a href="../news/limx-tennis.html">LimX’s tennis robot brief</a>.</p>` },
  { id: 'unitree-g1-vs-g1-plus', title: 'Unitree G1 vs G1+: what changes?', summary: 'Compare standard G1 and G1+ hardware, understand the EDU distinction, and separate specifications from demonstrated autonomy.', stories: ['unitree-g1-plus'], body: `
<p>The G1+ adds joints and sensing changes to Unitree’s compact humanoid platform. The useful comparison is between equivalent configurations: standard G1 against standard G1+, then EDU against EDU. Mixing a standard model with an upgraded research configuration can make a specification comparison misleading.</p>
<h2>Standard models at a glance</h2>
<div class="guide-table"><table><caption>Manufacturer-listed standard configurations, checked 2 October 2026</caption><thead><tr><th scope="col">Specification</th><th scope="col">G1</th><th scope="col">G1+</th></tr></thead><tbody>
<tr><th scope="row">Standing height</th><td>1,320 mm</td><td>1,340 mm</td></tr>
<tr><th scope="row">Weight with battery</th><td>About 35 kg</td><td>About 35 kg</td></tr>
<tr><th scope="row">Motorized degrees of freedom</th><td>23</td><td>25</td></tr>
<tr><th scope="row">Vision and ranging</th><td>Depth camera and 3D LiDAR</td><td>Binocular camera, chest wide-angle camera, and 3D LiDAR</td></tr>
<tr><th scope="row">Microphones</th><td>Four-microphone array</td><td>Six-microphone array</td></tr>
<tr><th scope="row">Listed arm maximum load</th><td>About 2 kg</td><td>About 3 kg</td></tr>
<tr><th scope="row">Listed battery life</th><td>About two hours</td><td>About two hours</td></tr>
</tbody></table></div>
<p>Sources: <a href="https://www.unitree.com/g1/">Unitree G1 specifications</a> and <a href="https://www.unitree.com/G1plus/">Unitree G1+ specifications</a>. Values depend on configuration and operating conditions; arm load also depends on arm posture. These figures are not results of a SuperRobots test.</p>
<h2>What the changes could mean</h2>
<p>Our interpretation: extra head movement and additional cameras offer more ways to observe a scene; a different microphone arrangement may help interaction systems gather audio. Whether those changes improve a specific task depends on the software, calibration, environment, and workload. A sensor specification alone cannot establish recognition accuracy.</p>
<h2>Standard versus EDU</h2>
<p>Unitree lists secondary development for the EDU versions of both models. The standard versions do not list that access. If your goal is to run your own control software, ask for the exact development interfaces and supported configuration before treating either standard model as a research platform.</p>
<h2>Questions a spec sheet cannot answer</h2>
<p>Can the robot repeat your task without assistance? Does it recover from mistakes? Is the demonstration software included? What happens when lighting, objects, or people change? Request a demonstration of the intended workflow with the configuration under discussion.</p>
<p>Check current regional pricing and included equipment directly with the manufacturer. Headline prices may exclude shipping, taxes, hands, computing modules, or integration. Unitree also notes that some showcased functions remain under development.</p>
<h2>Related reading</h2><p>Read the <a href="../news/unitree-g1-plus.html">G1+ announcement brief</a>, explore <a href="what-is-embodied-ai.html">embodied AI</a>, or browse our <a href="chinese-humanoid-robot-companies.html">Chinese humanoid company guide</a>.</p>` },
  { id: 'what-is-embodied-ai', title: 'What is embodied AI? A practical introduction', summary: 'Understand how AI connects perception and action in the physical world, and how to assess robot demonstrations.', stories: ['unitree-unifolm','d-robotics-funding'], body: `
<p>Embodied AI connects intelligence to an agent that senses and acts in an environment. In robotics, the agent has a physical body: cameras, other sensors, motors, and sometimes hands. Its actions change the scene it must understand next. Embodied AI research also uses simulated environments, where agents can learn and be evaluated before physical deployment.</p>
<h2>A simple example: moving a cup</h2>
<p>Imagine asking a robot to move a cup to a tray. It needs to identify the correct objects, estimate their positions, choose a reachable grasp, move without colliding, and check whether the cup arrived. The same instruction becomes a different problem if the cup is transparent, partly hidden, or moved by someone else.</p>
<ol class="guide-loop"><li><strong>Observe:</strong> gather information from sensors.</li><li><strong>Interpret:</strong> estimate objects, positions, and the goal.</li><li><strong>Act:</strong> issue commands through a control system.</li><li><strong>Check:</strong> observe the result and adjust.</li></ol>
<p>This loop explains why physical tasks demand more than a plausible written answer. A movement can fail even when the instruction was understood.</p>
<h2>Three terms you will encounter</h2>
<dl><dt>Vision-language-action model (VLA)</dt><dd>A model that connects visual observations and language with action outputs. A broader robotic system still needs to translate those outputs into supported movements.</dd><dt>Embodied reasoning</dt><dd>Reasoning about physical relationships and possible actions: where objects are, what can be reached, and which steps a task requires.</dd><dt>Low-level control</dt><dd>The machinery that makes motors follow commands while handling timing, balance, and motion constraints.</dd></dl>
<p><a href="https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/">Google DeepMind’s introduction to Gemini Robotics</a> provides a primary-source example of the distinction between a VLA model and embodied reasoning. It is one approach, not a definition of every robotics system.</p>
<h2>Does embodied AI require a humanoid?</h2>
<p>No. A robot arm, wheeled mobile manipulator, or legged machine can all connect sensing and action. A humanlike body is a design choice. For a particular job, the important questions concern reach, tools, space, and reliable performance.</p>
<h2>How to read a demonstration</h2>
<p>Ask whether the robot is acting autonomously, following a script, or receiving remote assistance. Look for the number of trials, unfamiliar objects, changed environments, and recovery from errors. An impressive clip can show a capability without establishing how reliably it works outside that setup.</p>
<p>Our reporting checklist separates three questions: what was shown, what customers can use, and what remains a development goal. Keeping those questions separate helps readers follow progress without treating each announcement as proof of general-purpose intelligence.</p>
<h2>Follow the topic</h2><p>See <a href="../news/unitree-unifolm.html">Unitree’s model and fine-tuning release</a> and <a href="../news/d-robotics-funding.html">D-Robotics’ chips and development tools</a>. For the hardware landscape, browse <a href="chinese-humanoid-robot-companies.html">Chinese humanoid robot companies</a> and the <a href="unitree-g1-vs-g1-plus.html">G1 versus G1+ comparison</a>.</p>` }
];
const esc = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
fs.mkdirSync(path.join(root, 'guides'), {recursive:true});
for (const g of guides) {
  const url = `https://superrobots.org/guides/${g.id}.html`;
  const schema = {'@context':'https://schema.org','@type':'Article',headline:g.title,description:g.summary,datePublished:reviewed,dateModified:reviewed,inLanguage:'en',author:{'@type':'Organization',name:'SuperRobots'},mainEntityOfPage:url};
  fs.writeFileSync(path.join(root,'guides',g.id+'.html'), `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(g.title)} | SuperRobots</title><meta name="description" content="${esc(g.summary)}"><link rel="canonical" href="${url}"><link rel="stylesheet" href="../news.css"><link rel="icon" href="../images/favicon.png"><meta property="og:type" content="article"><meta property="og:title" content="${esc(g.title)}"><meta property="og:description" content="${esc(g.summary)}"><meta property="og:url" content="${url}"><meta property="og:image" content="https://superrobots.org/images/robotics-news-preview.png"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">${JSON.stringify(schema)}</script></head><body class="news-site"><a class="skip-link" href="#main">Skip to content</a>${header('../','')}<main class="news-shell" id="main"><article class="article-shell"><a class="back-to-news" href="../index.html#guides">← All robotics guides</a><div class="story-kicker">Robotics reference</div><h1>${esc(g.title)}</h1><p class="article-deck">${esc(g.summary)}</p><div class="story-meta">By SuperRobots · Sources reviewed <time datetime="${reviewed}">2 October 2026</time></div><div class="article-body guide-body">${g.body}</div></article></main><footer><div class="news-shell footer-inner"><span>SuperRobots · Chinese sources, explained in English.</span><nav aria-label="Footer navigation"><a href="../index.html">Latest news</a><a href="../index.html#guides">Reference guides</a><a href="../news-feed.xml">RSS</a></nav></div></footer></body></html>`);
}
module.exports = guides;
