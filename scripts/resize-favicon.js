const Jimp = require("jimp");
const fs = require("fs");

(async () => {
  const srcPath = "./public/favicon.ico.png";
  if (!fs.existsSync(srcPath)) {
    console.error("Source favicon not found at", srcPath);
    process.exit(1);
  }

  const sizes = [32, 16];
  for (const size of sizes) {
    const img = await Jimp.read(srcPath);
    img.resize(size, size).write(`./public/fav-${size}.png`);
    console.log(`Written ./public/fav-${size}.png`);
  }

  console.log("Done");
})();
