
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/sethbang/tabson">
    <img src="/icons/icon_512x512.png" alt="Logo" width="128" height="128">
  </a>

<h3 align="center">tabson</h3>

  <p align="center">
    Browser Extension to Save and Load Tabs to/from JSON.
    <br />
    <br />
    |
    <a href="https://github.com/sethbang/tabson/issues/new">Report Bug</a>
    |
    <a href="https://github.com/sethbang/tabson/issues/new">Request Feature</a>
    |
  </p>
</div>

## Save and Load Tabs to/from JSON
This project is a browser extension that allows users to save their open tabs as a JSON file. 

### Usage 
This project is a browser extension that allows users to save their open tabs as a JSON file. To use this extension, simply click on the extension icon to open the UI. The UI has two buttons and a text field. The top blue button will allow you to save your open tabs as a JSON file. The text area field allows the user to paste the contents of a saved JSON tabs document and the orange button below, will reopen the tabs from the saved JSON document.

### Functionality 
- When the browser action is clicked, the `saveTabs()` function is called. This function queries the current window for all open tabs and stores their title and URL in an array. The date is then formatted for use in the filename, and the array of tab data is saved to a JSON file with formatting and the date in the filename.
- Creating a listener for the button with the id of j2t. When the button is clicked, it will take the
value of the textarea with the id of tabsJSON and parse it into an array of objects. Then it will
loop through the array and create a new tab for each object.
