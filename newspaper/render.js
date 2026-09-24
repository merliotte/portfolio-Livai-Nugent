// usage : node render.js            -> 16:9 (1920x1080)
//         node render.js vertical   -> 9:16 (1080x1920) pour les Reels
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const v = process.argv[2] === 'vertical';
const [src, out, width, height] = v
  ? ['newspaper-vertical.html', 'newspaper-effect-9x16.png', 1080, 1920]
  : ['newspaper.html', 'newspaper-effect.png', 1920, 1080];
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width,height}});
await p.goto('file://'+__dirname+'/'+src);await p.waitForTimeout(500);
await p.screenshot({path:__dirname+'/'+out});await b.close();})();
