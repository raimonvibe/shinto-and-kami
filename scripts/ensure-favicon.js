#!/usr/bin/env node
/**
 * Copies root favicon.ico to public/favicon.ico only (no app/ — avoids Next.js conflict).
 * Copies root social.jpg to public/social.jpg for OG and home screen.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const rootFavicon = path.join(rootDir, 'favicon.ico');
const publicDir = path.join(rootDir, 'public');
const publicFavicon = path.join(publicDir, 'favicon.ico');
const rootSocial = path.join(rootDir, 'social.jpg');
const publicSocial = path.join(publicDir, 'social.jpg');

function copyFaviconToPublic(src) {
  fs.mkdirSync(publicDir, { recursive: true });
  fs.copyFileSync(src, publicFavicon);
  console.log('Copied favicon.ico to public/ (served at /favicon.ico)');
}

if (fs.existsSync(rootFavicon)) {
  copyFaviconToPublic(rootFavicon);
} else if (fs.existsSync(publicFavicon)) {
  console.log('Using existing public/favicon.ico');
} else {
  // Create minimal 16x16 ICO so /favicon.ico is available
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

  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(publicFavicon, ico);
  fs.writeFileSync(rootFavicon, ico);
  console.log('Created favicon.ico in project root and public/');
}

// Copy social.jpg from root to public so /social.jpg is available for OG and home screen
if (fs.existsSync(rootSocial)) {
  fs.mkdirSync(publicDir, { recursive: true });
  fs.copyFileSync(rootSocial, publicSocial);
  console.log('Copied root social.jpg to public/social.jpg');
}
