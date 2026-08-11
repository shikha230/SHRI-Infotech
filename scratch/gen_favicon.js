import { Jimp } from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateFavicon() {
  const img = await Jimp.read(path.join(__dirname, '../src/assets/logo.jpeg'));
  
  console.log(`Logo size: ${img.width} x ${img.height}`);

  // The logo is 854x354. 
  // Icon (S-shape with circuit): x~15 to x~350, y~4 to y~280
  // Below y~280 is the "INFOTECH" text (y310-330 has content)
  // We want JUST the S-symbol icon (not the INFOTECH text below)
  // So crop: x=15, y=4, w=340, h=280 (just the S mark, square-ish)
  
  // Actually let's include a small padding around the S icon
  const cropX = 10;
  const cropY = 2;
  const cropW = 350;  
  const cropH = 290;  // stop before INFOTECH text

  const cropped = img.clone().crop({ x: cropX, y: cropY, w: cropW, h: cropH });
  
  // Pad to square (add bottom padding with white background)
  const squareSize = Math.max(cropW, cropH);
  
  // Save 180x180 PNG - resize to square
  const fav180 = cropped.clone().resize({ w: 180, h: 180 });
  await fav180.write(path.join(__dirname, '../public/logo-icon.png'));
  console.log('Saved logo-icon.png (180x180)');

  // Save 64x64 PNG
  const fav64 = cropped.clone().resize({ w: 64, h: 64 });
  await fav64.write(path.join(__dirname, '../public/favicon-64.png'));
  console.log('Saved favicon-64.png (64x64)');

  console.log('Done!');
}

generateFavicon().catch(console.error);
