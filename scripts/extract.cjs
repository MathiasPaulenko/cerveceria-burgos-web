const fs = require('fs');
const html = fs.readFileSync(process.env.TEMP + '/cocteleria.html', 'utf8');
const m = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
if (m) {
  console.log('FOUND length:', m[1].length);
  fs.writeFileSync(process.env.TEMP + '/ndata.json', m[1]);
  console.log('Saved to ndata.json');
} else {
  console.log('NOT FOUND');
}
