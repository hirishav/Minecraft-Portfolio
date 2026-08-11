const fs = require('fs');
const https = require('https');
const path = require('path');

const items = [
  'iron_sword',
  'lapis_lazuli',
  'ender_pearl',
  'command_block', // we'll use command_block_front
  'slime_ball',
  'bucket',
  'magma_cream',
  'enchanted_book',
  'iron_pickaxe'
];

// Fallback base URL from raw.githubusercontent.com
const baseUrl = 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/item/';
const blockUrl = 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.20.4/assets/minecraft/textures/block/';

items.forEach(item => {
  let url = baseUrl + item + '.png';
  if (item === 'command_block') {
    url = blockUrl + 'command_block_front.png';
  } else if (item === 'enchanted_book') {
    // There is no enchanted_book item texture, we'll download book.png and rename it. Or download a generic image.
    // Actually, I'll use book.png and rename it.
    url = baseUrl + 'book.png';
  }

  const dest = path.join(__dirname, 'public', 'minecraft', 'item', item + '.png');
  
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded: ' + item + '.png');
      });
    } else {
      console.log('Failed to download ' + item + '.png - Status code: ' + res.statusCode + ' URL: ' + url);
    }
  }).on('error', (err) => {
    console.log('Error downloading ' + item + '.png: ' + err.message);
  });
});
