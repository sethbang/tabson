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
