- npm `dist` command
  - Clear `dist`
  - `jspm bundle src/index.js dist/bundle.js`
  - Move `jspm_packages/system.js`
  - Move `config.js`
  - Move `index.html` and transform it

- npm `test` command
  - Run chai specs with babel
  - Look for cool reporter

- npm `tdd` command
  - Watch `./test/**/*` and re-run test command

- Import normalize via `jspm` and include in `Project`

- Have yeoman ask if `src` or `docs`
  - change html import file path
  - change dist to docs
  - add lib build as dist
  - change up tests
