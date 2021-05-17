
updateTable();
async function updateTable() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeTable
  });
}

// The body of this function will be executed as a content script inside the
// current page
function changeTable() {
    const list = document.getElementById("templates").querySelectorAll("lucid-folder-entry")
    const newDiv = document.createElement("div");
    list.forEach(item => {
      item.style.paddingLeft = "15px"
      newDiv.appendChild(item)
    });
    newDiv.style.display = "flex";
    newDiv.style.flexWrap = "wrap";
    newDiv.style.overflowY = "auto";
    newDiv.style.padding = "15px";
    document.querySelector("#scroll-content > div > lucid-chart-dashboard-tabs > lucid-inline-finger-tabs > div.content").appendChild(newDiv);
    document.querySelector("#scroll-content > div > lucid-chart-dashboard-tabs > lucid-inline-finger-tabs > div.content > lucid-chart-dashboard-header").remove();
}
