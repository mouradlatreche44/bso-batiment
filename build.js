const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Clean dist
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true });
}
fs.mkdirSync('dist');

// Copy all HTML files
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
htmlFiles.forEach(f => fs.copyFileSync(f, path.join('dist', f)));

// Copy client.config.js
if (fs.existsSync('client.config.js')) {
  fs.copyFileSync('client.config.js', path.join('dist', 'client.config.js'));
}

// Copy assets folder
if (fs.existsSync('assets')) {
  copyDir('assets', path.join('dist', 'assets'));
}

console.log('Build complete — ' + htmlFiles.length + ' pages copied to dist/');
