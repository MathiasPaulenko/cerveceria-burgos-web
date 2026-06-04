const fs = require('fs');
const path = require('path');

const htmlPath = process.env.TEMP + '/cocteleria.html';
const html = fs.readFileSync(htmlPath, 'utf8');

const match = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
if (!match) {
  console.log('No NEXT_DATA found');
  process.exit(1);
}

const json = match[1];
fs.writeFileSync(process.env.TEMP + '/next_data.json', json);
console.log('Saved JSON, length:', json.length);

try {
  const data = JSON.parse(json);
  console.log('Parsed OK');
  
  const menus = data.props?.pageProps?.menus || [];
  console.log('Menus count:', menus.length);
  
  if (menus.length === 0) {
    console.log('No menus found');
    process.exit(1);
  }
  
  const menu = menus[0];
  console.log('Menu name:', menu.name);
  const categories = menu.categories || [];
  console.log('Categories:', categories.length);
  
  // Build mapping of image URLs to item info
  const imageMap = [];
  categories.forEach(cat => {
    const items = cat.items || [];
    items.forEach(item => {
      if (item.image) {
        imageMap.push({
          name: item.name,
          category: cat.name,
          imageUrl: item.image
        });
      }
    });
  });
  
  console.log('Total items with images:', imageMap.length);
  
  // Save mapping
  fs.writeFileSync(process.env.TEMP + '/cocktail_image_map.json', JSON.stringify(imageMap, null, 2));
  console.log('Saved image map to cocktail_image_map.json');
  
  // Show first 10
  imageMap.slice(0, 10).forEach(item => {
    console.log(item.name, '->', item.imageUrl.substring(0, 80) + '...');
  });
  
} catch (e) {
  console.error('Parse error:', e.message);
}
