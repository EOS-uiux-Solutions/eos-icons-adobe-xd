# eos-icons-adobe-xd

An Adobe XD plugin to use all of EOS-icons from within the application

[![build-run](https://github.com/EOS-uiux-Solutions/eos-icons-adobe-xd/actions/workflows/build.yml/badge.svg)](https://github.com/EOS-uiux-Solutions/eos-icons-adobe-xd/actions/workflows/build.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![codecov](https://codecov.io/gh/EOS-uiux-Solutions/eos-icons-adobe-xd/branch/main/graph/badge.svg?token=F5V5O1DUTT)](https://codecov.io/gh/EOS-uiux-Solutions/eos-icons-adobe-xd)

## Guidelines to run the Plugin Locally

Below are the steps to get your plugin running

The plugin uses NPM in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to various
libraries. You can find the download link here:

https://nodejs.org/en/download/

- Clone the repo in the folder of your choice.
- Run `npm i` and `npm run watch`.
- Install [`Adobe UXP Developer Tool`](https://www.adobe.io/photoshop/uxp/guides/uxp-developer-tool/) .
- Open `Adobe XD` and open a document.
- Open UXP Developer Tool.
- Click `Add Existing Plugin`.
- Add the `manifest.json` from the dist folder.
- Click on 3 dot icon and select `Load`.
- Go back to `Adobe XD` and try it out! :)

## Keeping up with the Test Files

To make sure the test files are working correctly after the latest changes, run the following command: `npm test`

## Check Linting Errors

Run the following command to check if there are any linting errors: `npx eslint .`

## JS and CSS Quality Assurance

Before submitting a PR/MR make sure your code is compliant with our JS and CSS rules by running: `npm run checkFormat` and `npx prettier --check .`

If you encounter any deploy error in JS try fixing it by running `npx prettier --write .`

### FAQs

1. Some icons get distorted. Is it the plugin fault?

Ans. No, follow [this](https://adobexd.uservoice.com/forums/353007-adobe-xd-feature-requests/suggestions/17480839--scaling-tool-scale-stroke-weight-shadow-effect) and [this](https://community.adobe.com/t5/adobe-xd/design-adobe-xd-resize-svg-without-distortion/m-p/10880105].https://community.adobe.com/t5/adobe-xd/design-adobe-xd-resize-svg-without-distortion/m-p/10880105).
Workaround: Toggle `Responsive Resize` before resizing those icons.

If it doesn't help,
then:

- Delete it.
- Paste again.
- Switch off `Responsive Resize`.
- Resize now.
