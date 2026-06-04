const fs = require('fs');

const json = fs.readFileSync(process.env.TEMP + '/ndata.json', 'utf8');
const data = JSON.parse(json);

const menus = data.props?.pageProps?.menus || [];
console.log('Menus:', menus.length);

if (menus.length === 0) {
  console.log('No menus');
  process.exit(1);
}

const menu = menus[0];
const categories = menu.categories || [];
console.log('Categories:', categories.length);

const map = [];
categories.forEach(cat => {
  const items = cat.items || [];
  items.forEach(item => {
    map.push({
      name: item.name,
      category: cat.name,
      imageUrl: item.image || null,
      price: item.price
    });
  });
});

console.log('Total items:', map.length);
console.log('Items with images:', map.filter(i => i.imageUrl).length);

// Save mapping
fs.writeFileSync(process.env.TEMP + '/cocktail_map.json', JSON.stringify(map, null, 2));

// Show first 20 with images
map.filter(i => i.imageUrl).slice(0, 20).forEach(item => {
  console.log(item.name, '->', item.imageUrl.substring(0, 80));
});
