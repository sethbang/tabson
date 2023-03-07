

# Save Tabs
This project is a browser extension that allows users to save their open tabs as a JSON file. 

## Functionality 
When the browser action is clicked, the `saveTabs()` function is called. This function queries the current window for all open tabs and stores their title and URL in an array. The date is then formatted for use in the filename, and the array of tab data is saved to a JSON file with formatting and the date in the filename. 

## Usage 
To use this extension, simply click on the browser action icon to save your open tabs as a JSON file.