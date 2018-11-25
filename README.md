# ext-ambient-darkmode

Chrome web store: https://chrome.google.com/webstore/detail/ambient-dark-mode/ebbpgmigoakmebiamelbleggninjkjbg

Browser extension that automatically switches to a dark theme based on your local time of day. Between the hours of `6PM - 6AM` this extension will switch your browsing experience to a dark theme.

[![GitHub stars](https://img.shields.io/github/stars/adamzerella/ext-ambient-darkmode.svg)](https://github.com/adamzerella/ext-ambient-darkmode/stargazers)
[![GitHub license](https://img.shields.io/github/license/adamzerella/ext-ambient-darkmode.svg)](https://github.com/adamzerella/ext-ambient-darkmode/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/adamzerella/ext-ambient-darkmode.svg)](https://github.com/adamzerella/ext-ambient-darkmode/issues)

# Caveats
- Detected `"ambient"` light is currently detected from the users local date and time, this is due to a browser extenstion limitation and the `Camera` permission.
- The dark mode CSS manipulation is still a work in progress, CSS improvements are planned.
- Screenshots and icon designs are temporary, at some point this project intends to get a real design going.

# Browser Compatability
<table>
    <th></th><th>Chrome</th><th>Edge</th><th>Firefox</th><th>IE</th><th>Opera</th><th>Safari</th>
    <tr>
        <td><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onActivated">tabs.onActivated</a></td>
        <td>YES</td>
        <td>14</td>
        <td>45</td>
        <td>?</td>
        <td>YES</td>
        <td>?</td>
    </tr>
    <tr>
        <td><a href="https://developer.mozilla.org/docs/Web/API/Geolocation/watchPosition">geolocation.watchPosition</a></td>
        <td>5</td>
        <td>YES</td>
        <td>3.5</td>
        <td>9</td>
        <td>16</td>
        <td>YES</td>
    </tr>
</table>

# Deployment
```bash
zip -rv19 adm.zip manifest.json src/
```
Extension updates are then manually submitted via the [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole).

# Credits
- Icons made by [Dave Gandy](https://www.flaticon.com/authors/dave-gandy) from [flaticon](https://www.flaticon.com/)

# License

This project is licensed under the MIT License - see the [LICENSE](https://raw.githubusercontent.com/adamzerella/ext-ambient-darkmode/master/LICENSE) file for details.

# Contributors

<div style="display:inline;">
  <img width="64" height="64" href="https://github.com/adamzerella" src="https://avatars0.githubusercontent.com/u/1501560?s=460&v=4" alt="Adam A. Zerella"/>
</div>
