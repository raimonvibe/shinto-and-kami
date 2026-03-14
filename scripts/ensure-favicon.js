#!/usr/bin/env node
/**
 * Copies root favicon.ico to app/favicon.ico (Next.js App Router serves it automatically).
 * Does NOT use public/favicon.ico to avoid conflict and Vercel 500.
 * Copies root social.jpg to public/social.jpg for OG and home screen.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const rootFavicon = path.join(rootDir, 'favicon.ico');
const appFavicon = path.join(rootDir, 'app', 'favicon.ico');
const publicDir = path.join(rootDir, 'public');
const rootSocial = path.join(rootDir, 'social.jpg');
const publicSocial = path.join(publicDir, 'social.jpg');

if (fs.existsSync(rootFavicon)) {
  fs.mkdirSync(path.dirname(appFavicon), { recursive: true });
  fs.copyFileSync(rootFavicon, appFavicon);
  console.log('Copied root favicon.ico to app/favicon.ico (Next.js will serve it)');
} else if (!fs.existsSync(appFavicon)) {
  // Create minimal 16x16 ICO
  const size = 16;
  const imageBytes = 40 + size * size * 4 + Math.ceil((size * size) / 8);
  const header = Buffer.alloc(6 + 16);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(size, 6);
  header.writeUInt8(size, 7);
  header.writeUInt8(0, 8);
  header.writeUInt8(0, 9);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(imageBytes, 14);
  header.writeUInt32LE(22, 18);

  const dib = Buffer.alloc(40);
  dib.writeUInt32LE(40, 0);
  dib.writeInt32LE(size, 4);
  dib.writeInt32LE(size * 2, 8);
  dib.writeUInt16LE(1, 12);
  dib.writeUInt16LE(32, 14);
  dib.writeUInt32LE(0, 16);
  dib.writeUInt32LE(size * size * 4, 20);
  dib.writeInt32LE(0, 24);
  dib.writeInt32LE(0, 28);
  dib.writeUInt32LE(0, 32);
  dib.writeUInt32LE(0, 36);

  const pixels = Buffer.alloc(size * size * 4);
  for (let i = 0; i < size * size * 4; i += 4) {
    pixels[i] = 45;
    pixels[i + 1] = 107;
    pixels[i + 2] = 109;
    pixels[i + 3] = 255;
  }
  const andMask = Buffer.alloc(size * size / 8);
  andMask.fill(0);

  const imageData = Buffer.concat([dib, pixels, andMask]);
  const ico = Buffer.concat([header, imageData]);

  fs.mkdirSync(path.dirname(appFavicon), { recursive: true });
  fs.writeFileSync(appFavicon, ico);
  fs.writeFileSync(rootFavicon, ico);
  console.log('Created favicon.ico in app/ and project root');
}

// Remove public/favicon.ico if present to avoid conflict with app/favicon.ico
const publicFavicon = path.join(publicDir, 'favicon.ico');
if (fs.existsSync(publicFavicon)) {
  fs.unlinkSync(publicFavicon);
  console.log('Removed public/favicon.ico (using app/favicon.ico only)');
}

// Copy social.jpg from root to public for OG and home screen
if (fs.existsSync(rootSocial)) {
  fs.mkdirSync(publicDir, { recursive: true });
  fs.copyFileSync(rootSocial, publicSocial);
  console.log('Copied root social.jpg to public/social.jpg');
}
