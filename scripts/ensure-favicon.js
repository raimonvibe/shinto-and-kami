#!/usr/bin/env node
/**
 * Ensures app/favicon.ico exists (copy from root if present).
 * Copies root social.jpg to public/social.jpg for OG image and home screen icon.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const rootFavicon = path.join(rootDir, 'favicon.ico');
const appFavicon = path.join(rootDir, 'app', 'favicon.ico');
const rootSocial = path.join(rootDir, 'social.jpg');
const publicDir = path.join(rootDir, 'public');
const publicSocial = path.join(publicDir, 'social.jpg');

if (fs.existsSync(rootFavicon)) {
  fs.copyFileSync(rootFavicon, appFavicon);
  console.log('Copied root favicon.ico to app/favicon.ico');
} else if (!fs.existsSync(appFavicon)) {
  // Create minimal 16x16 ICO (solid deep indigo) so Next.js has a favicon
  const size = 16;
  const imageBytes = 40 + size * size * 4 + Math.ceil((size * size) / 8);
  const header = Buffer.alloc(6 + 16);
  header.writeUInt16LE(0, 0);   // reserved
  header.writeUInt16LE(1, 2);   // type 1 = ICO
  header.writeUInt16LE(1, 4);  // number of images
  header.writeUInt8(size, 6);   // width
  header.writeUInt8(size, 7);   // height
  header.writeUInt8(0, 8);      // colors
  header.writeUInt8(0, 9);      // reserved
  header.writeUInt16LE(1, 10);  // color planes
  header.writeUInt16LE(32, 12); // bits per pixel
  header.writeUInt32LE(imageBytes, 14);  // image size (in directory entry)
  header.writeUInt32LE(22, 18); // offset to image data (6+16)

  const dib = Buffer.alloc(40);
  dib.writeUInt32LE(40, 0);           // header size
  dib.writeInt32LE(size, 4);         // width
  dib.writeInt32LE(size * 2, 8);     // height (includes AND mask)
  dib.writeUInt16LE(1, 12);          // planes
  dib.writeUInt16LE(32, 14);         // bit count
  dib.writeUInt32LE(0, 16);          // compression
  dib.writeUInt32LE(size * size * 4, 20); // image size
  dib.writeInt32LE(0, 24);           // X pixels per meter
  dib.writeInt32LE(0, 28);
  dib.writeUInt32LE(0, 32);
  dib.writeUInt32LE(0, 36);

  const pixels = Buffer.alloc(size * size * 4);
  for (let i = 0; i < size * size * 4; i += 4) {
    pixels[i] = 45;     // B (2D)
    pixels[i + 1] = 107; // G (6B)
    pixels[i + 2] = 109; // R (6D = #2D2D6B deep indigo)
    pixels[i + 3] = 255;
  }
  const andMask = Buffer.alloc(size * size / 8);
  andMask.fill(0);

  const imageData = Buffer.concat([dib, pixels, andMask]);
  const ico = Buffer.concat([header, imageData]);

  fs.mkdirSync(path.dirname(appFavicon), { recursive: true });
  fs.writeFileSync(appFavicon, ico);
  fs.writeFileSync(rootFavicon, ico);
  console.log('Created favicon.ico in project root and app/');
}

// Copy social.jpg from root to public so /social.jpg is available for OG and home screen
if (fs.existsSync(rootSocial)) {
  fs.mkdirSync(publicDir, { recursive: true });
  fs.copyFileSync(rootSocial, publicSocial);
  console.log('Copied root social.jpg to public/social.jpg');
}
