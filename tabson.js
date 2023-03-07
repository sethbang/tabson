/* saveTabs() is a function that saves the current tabs in the active window to a JSON file. 
It uses the browser.tabs.query() method to get all tabs in the current window and then loops 
through them to get their title and url. It then formats the date for the filename and saves 
it with formatting and date in filename using browser.downloads.download(). Finally, it adds 
a listener for browser action click which calls saveTabs() when clicked.
*/
function saveTabs() {
  // get all tabs in the current window
  browser.tabs.query({ currentWindow: true }).then((tabs) => {
    let tabData = [];
    // loop through tabs and get their title and url
    for (let tab of tabs) {
      tabData.push({
        title: tab.title,
        url: tab.url,
      });
    }
    // format date for filename
    let date = new Date();
    let dateString = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;

    // save data to JSON file with formatting and date in filename
    let blob = new Blob([JSON.stringify(tabData, null, 2)], {
      type: "application/json",
    });
    let url = URL.createObjectURL(blob);
    browser.downloads.download({
      url: url,
      filename: `${dateString}-tabs.json`,
    });
  });
}

// add listener for browser action click
browser.browserAction.onClicked.addListener(saveTabs);
