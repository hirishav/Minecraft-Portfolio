const fs = require('fs');
const https = require('https');
const path = require('path');

const blocks = [
  'cherry_leaves',
  'cherry_log'
];

const baseUrl = 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/block/';

blocks.forEach(block => {
  const url = baseUrl + block + '.png';
  const dest = path.join(__dirname, 'public', 'minecraft', 'block', block + '.png');
  
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded: ' + block + '.png');
      });
    } else {
      console.log('Failed to download ' + block + '.png - Status code: ' + res.statusCode);
    }
  }).on('error', (err) => {
    console.log('Error downloading ' + block + '.png: ' + err.message);
  });
});
