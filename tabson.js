
document.getElementById("t2j").addEventListener("click", function () {
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
    let dateString = `${date.getFullYear()}-${date.getMonth() + 1
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
});

/* Creating a listener for the button with the id of j2t. When the button is clicked, it will take the
value of the textarea with the id of tabsJSON and parse it into an array of objects. Then it will
loop through the array and create a new tab for each object. */
document.getElementById("j2t").addEventListener("click", function () {

  /* Getting the value of the textarea with the id of tabsJSON and parsing it into an array of objects. */
  const tabsJ = document.getElementById("jsonTabs").value;
  const parsedTabs = JSON.parse(tabsJ);

  /* Looping through the array of objects and creating a new tab for each object. */
  for (let tab of parsedTabs) {
    console.log(tab.url);
    browser.tabs.create({ url: tab.url });
  }

  window.close();
});

