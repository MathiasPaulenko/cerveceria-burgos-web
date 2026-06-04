const fs = require('fs');

const json = fs.readFileSync(process.env.TEMP + '/ndata.json', 'utf8');
const data = JSON.parse(json);

const cocktails = [];

function findItems(obj) {
  if (typeof obj !== 'object' || obj === null) return;
  
  if (obj.displayName && typeof obj.displayName === 'string' && obj.image) {
    cocktails.push({
      name: obj.displayName,
      image: obj.image,
      price: obj.price || obj.basePrice
    });
  }
  
  if (Array.isArray(obj)) {
    obj.forEach(item => findItems(item));
  } else {
    Object.values(obj).forEach(val => findItems(val));
  }
}

findItems(data);

console.log('Total cocktails with images:', cocktails.length);

// Save mapping
fs.writeFileSync(process.env.TEMP + '/cocktail_map.json', JSON.stringify(cocktails, null, 2));

// Show first 20
cocktails.slice(0, 20).forEach(c => {
  console.log(c.name, '->', c.image.substring(0, 80));
});
