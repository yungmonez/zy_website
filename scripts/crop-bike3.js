const sharp = require('sharp');
const fs = require('fs');
const input = './bike3.png';
const output = './bike3_cropped.png';

if (!fs.existsSync(input)) {
  console.error(`Input file not found: ${input}`);
  process.exit(1);
}

(async () => {
  try {
    const image = sharp(input);

    // Auto-crop by trimming uniform edges, then resize by 250%\
    const metadata = await image.metadata();

    let processed = image.trim();

    // Resize by 2.5x while preserving the aspect ratio
    processed = processed.resize(Math.round(metadata.width * 2.5), null, { withoutEnlargement: false });

    await processed.toFile(output);

    console.log(`Cropped and resized saved to ${output}`);
  } catch (err) {
    console.error('Error processing image:', err);
    process.exit(1);
  }
})();
