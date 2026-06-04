const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// Load cocktail map
const cocktailMap = JSON.parse(fs.readFileSync(process.env.TEMP + '/cocktail_map.json', 'utf8'));
console.log('Total cocktails:', cocktailMap.length);

const outputDir = 'public/images/cocktails';

// Clean old files except .gitkeep
const existing = fs.readdirSync(outputDir);
existing.forEach(f => {
  if (f !== '.gitkeep') {
    fs.unlinkSync(path.join(outputDir, f));
  }
});

// Create name-to-id mapping based on our JSON IDs
const esData = JSON.parse(fs.readFileSync('src/data/cocteles_es.json', 'utf8'));
const idMap = {};
esData.categorias.forEach(cat => {
  cat.items.forEach(item => {
    idMap[item.nombre.toLowerCase().trim()] = item.id;
  });
});

console.log('ID map entries:', Object.keys(idMap).length);

// Download and convert
let downloaded = 0;
let failed = 0;

async function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error('Status ' + res.statusCode));
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        fs.writeFileSync(outputPath + '.tmp', buffer);
        resolve(buffer);
      });
    }).on('error', reject);
  });
}

async function processCocktail(cocktail, index) {
  try {
    const imgData = cocktail.image;
    const imgUrl = typeof imgData === 'string' ? imgData : imgData?.url;
    if (!imgUrl) {
      console.log('SKIP (no URL):', cocktail.name);
      return;
    }
    
    const id = idMap[cocktail.name.toLowerCase().trim()];
    if (!id) {
      console.log('SKIP (no ID):', cocktail.name);
      return;
    }
    
    const outputPath = path.join(outputDir, id + '.webp');
    const buffer = await downloadImage(imgUrl, outputPath);
    
    await sharp(buffer)
      .webp({ quality: 80 })
      .resize(400, 400, { fit: 'cover' })
      .toFile(outputPath);
    
    // Clean temp file
    if (fs.existsSync(outputPath + '.tmp')) {
      fs.unlinkSync(outputPath + '.tmp');
    }
    
    downloaded++;
    console.log('OK:', cocktail.name, '->', id + '.webp');
  } catch (err) {
    failed++;
    console.log('FAIL:', cocktail.name, err.message);
  }
}

async function main() {
  for (let i = 0; i < cocktailMap.length; i++) {
    await processCocktail(cocktailMap[i], i);
  }
  console.log('\nDone! Downloaded:', downloaded, 'Failed:', failed);
}

main().catch(console.error);
