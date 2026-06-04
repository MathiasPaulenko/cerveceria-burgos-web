const fs = require('fs');

const json = fs.readFileSync(process.env.TEMP + '/ndata.json', 'utf8');
const data = JSON.parse(json);

function explore(obj, path = '') {
  if (typeof obj !== 'object' || obj === null) return;
  
  if (Array.isArray(obj)) {
    if (obj.length > 0 && typeof obj[0] === 'object') {
      console.log(path + ': array[' + obj.length + ']');
      const keys = Object.keys(obj[0]);
      console.log('  keys:', keys.slice(0, 10).join(', '));
      if (keys.includes('name')) {
        console.log('  first item name:', obj[0].name);
      }
      if (keys.includes('image')) {
        console.log('  first item image:', obj[0].image ? 'YES' : 'NO');
      }
    }
  } else {
    Object.keys(obj).forEach(key => {
      const val = obj[key];
      if (Array.isArray(val) && val.length > 0 && typeof val[0] === 'object') {
        console.log(path + '.' + key + ': array[' + val.length + ']');
        const keys = Object.keys(val[0]);
        console.log('  keys:', keys.slice(0, 10).join(', '));
        if (keys.includes('name')) {
          console.log('  first item name:', val[0].name);
        }
        if (keys.includes('image')) {
          console.log('  first item image:', val[0].image ? 'YES' : 'NO');
        }
      }
    });
  }
}

explore(data, 'root');
explore(data.props, 'props');
if (data.props?.pageProps) explore(data.props.pageProps, 'props.pageProps');
