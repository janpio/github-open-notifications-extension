# GitHub Open Notifications Extension

This extension adds several `Open all: ...` buttons in GitHub's notifications view which, when clicked, will open the related notifications in a new tabs and mark them as read:

* Open all Issues
* Open all PRs
* Open all Releases
* Open all closed
* Open all merged
* Open all unread

![example](assets/screenshot.png)

This extension is based on [GitHub Open All Notifications](https://github.com/bitoiu/github-open-all-notifications). I forked its code and extended it. Thanks [@bitoiu](https://github.com/bitoiu)!

## Installation

Simply install the extension from your browser's add-on store:

* https://chrome.google.com/webstore/detail/github-open-notifications/fabhghicmpbhanedaojnjegkfmhnfcpm
* https://addons.mozilla.org/en-US/firefox/addon/github-open-notifications/

## Known limitation

The buttons only appears on page load.  
If a user clicks the notification button on the left hand side of the screen that will (re)load the notification views using PJAX, and as such the page load event won't trigger adding the button back again. Simply refresh the page. (The original developer of the extension this is based on hopes to make the button appear based on the rendering events and not the page load event. I hope so as well and will investigate this myself.)

## Contributing

Pull requests are welcome as well as issues reporting problems or providing feedback.

The extension is extremely simple and as such it doesn't include a package manager and/or build tool. To develop the extension simply clone the repository and load the unpacked extensions directly into Google Chrome.

:octocat::heart:
