const fs = require('fs');
const https = require('https');
const path = require('path');

const sounds = [
  { url: 'https://mcasset.cloud/1.20.4/assets/minecraft/sounds/entity/warden/heartbeat.ogg', name: 'warden_heartbeat.ogg' },
  { url: 'https://mcasset.cloud/1.20.4/assets/minecraft/sounds/entity/experience_orb/pickup.ogg', name: 'flash.ogg' },
  { url: 'https://mcasset.cloud/1.20.4/assets/minecraft/sounds/entity/enderman/teleport.ogg', name: 'enderman.ogg' }
];

const dir = path.join(__dirname, 'public', 'sounds');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

sounds.forEach(sound => {
  const dest = path.join(dir, sound.name);
  https.get(sound.url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded: ' + sound.name);
      });
    } else {
      console.log('Failed to download ' + sound.name);
    }
  });
});
