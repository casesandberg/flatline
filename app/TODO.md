- npm `dist` command
  - Clear `dist`
  - `jspm bundle src/index.js dist/bundle.js`
  - Move `jspm_packages/system.js`
  - Move `config.js`
  - Move `index.html` and transform it

- Have yeoman ask if `src` or `docs`
  - change html import file path
  - change dist to docs
  - add lib build as dist
  - change up tests

- Create node script that changes a js file (with comments) into npm scripts

- Delete everything in root and replace it with the `dist` files
