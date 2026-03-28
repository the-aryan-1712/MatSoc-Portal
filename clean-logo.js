import Jimp from "jimp";

Jimp.read("public/matsoc-logo.png").then(img => {
  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    let a = (lum - 80) * (255 / 70);
    a = Math.max(0, Math.min(255, a));
    this.bitmap.data[idx] = 255;
    this.bitmap.data[idx+1] = 255;
    this.bitmap.data[idx+2] = 255;
    this.bitmap.data[idx+3] = a;
  });
  img.autocrop();
  img.write("public/matsoc-logo-clean.png", () => console.log("CLEAN DONE"));
}).catch(err => console.error(err));
