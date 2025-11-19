#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

async function build() {
  try {
    const src = path.resolve(__dirname, '..', 'css', 'styles.css');
    const out = path.resolve(__dirname, '..', 'assets', 'output.css');

    const css = fs.readFileSync(src, 'utf8');

    const processor = postcss([
      require('@tailwindcss/postcss'),
      require('autoprefixer'),
    ]);

    console.log('Building', src, '→', out);
    const result = await processor.process(css, { from: src, to: out });
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, result.css, 'utf8');
    if (result.map) fs.writeFileSync(out + '.map', result.map.toString(), 'utf8');
    console.log('Wrote', out);
  } catch (err) {
    console.error('Build failed:', err);
    process.exit(1);
  }
}

build();
