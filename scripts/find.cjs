const fs = require('fs');

const json = fs.readFileSync(process.env.TEMP + '/ndata.json', 'utf8');
const data = JSON.parse(json);

// Search for objects with displayName and image
function findItems(obj, path = '') {
  if (typeof obj !== 'object' || obj === null) return;
  
  if (obj.displayName && typeof obj.displayName === 'string') {
    console.log('FOUND:', obj.displayName, '| image:', obj.image ? 'YES' : 'NO', '| price:', obj.price);
  }
  
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => findItems(item, path + '[' + i + ']'));
  } else {
    Object.keys(obj).forEach(key => {
      findItems(obj[key], path + '.' + key);
    });
  }
}

findItems(data);
