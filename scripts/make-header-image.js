const sharp = require('sharp');
const fs = require('fs');
const input = './bike3_cropped.png';
const output = './bike3_header.png';

if (!fs.existsSync(input)) {
  console.error(`Input file not found: ${input}`);
  process.exit(1);
}

(async () => {
  try {
    // Resize to fit within 48x48 while preserving aspect ratio
    // Use fit:'inside' so neither dimension exceeds 48
    const buffer = await sharp(input)
      .resize({ width: 48, height: 48, fit: 'inside', withoutEnlargement: false })
      .png()
      .toBuffer();

    // Composite onto a 48x48 transparent canvas and center the resized image
    await sharp({
      create: {
        width: 48,
        height: 48,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([{ input: buffer, gravity: 'center' }])
      .png()
      .toFile(output);

    console.log(`Header image saved to ${output}`);
  } catch (err) {
    console.error('Error creating header image:', err);
    process.exit(1);
  }
})();
