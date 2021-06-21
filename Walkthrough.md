### EOS Adobe Plugin

## Steps

# Latest

- Clone the repo in the folder of your choice.
- Run `npm i` and `npm run watch`.
- Install `Adobe UXP Developer Tool`.
- Open `Adobe XD` and open a document.
- Open UXP Developer Tool.
- Click `Add Existing Plugin`.
- Add the `manifest.json` from the dist folder.
- Click on 3 dot icon and select `Load`.
- Go back to `Adobe XD` and try it out! :)

# Deprecated

- Open Adobe XD.
- Click `Hamburger menu(left corner) -> Plugins -> Development -> Show Develop Folder`.
- Visit the folder, and clone the repo.
- Run `npm i` and `npm run watch`.
- Move the `images` folder and `manifest.json` outside the `dist` directory to the top level.
- Visit Adobe XD.
- Press `Ctrl + Shift + R`.
- Click `Plugins`(bottom left corner).
- `EOS` should show up on the search bar.

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

2. How do I know the search result?

Ans. I would be updating the UI shortly to make it more interactive. This was more of a proof of concept exercise, so sorry for the bad UI. Wait for 1-2s before pressing `Copy to Clipboard`. I relied on developer console to see the logs, and consequently the results.Try it out.
