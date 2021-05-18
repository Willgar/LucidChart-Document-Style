//Replaces the carousel with a flexbox with same children.
function changeTable() {
  try{
    const list = document.getElementById("templates").querySelectorAll("lucid-folder-entry")
    const newDiv = document.createElement("div");
    list.forEach(item => {
      item.style.paddingLeft = "15px"
      newDiv.appendChild(item)
    });
    newDiv.style.display = "flex";
    newDiv.style.flexWrap = "wrap";
    newDiv.style.overflowY = "auto";
    document.querySelector("#scroll-content > div > lucid-chart-dashboard-tabs > lucid-inline-finger-tabs > div.content").appendChild(newDiv);
    document.querySelector("#scroll-content > div > lucid-chart-dashboard-tabs > lucid-inline-finger-tabs > div.content > lucid-chart-dashboard-header").remove();
    //Adds eventlistener for the recommend for me button.
    document.querySelector("#scroll-content > div > lucid-chart-dashboard-tabs > lucid-inline-finger-tabs > div.tabs.no-margin > lucid-finger-tab:nth-child(2)").addEventListener("click", ()=>{document.querySelector("#scroll-content > div > lucid-chart-dashboard-tabs > lucid-inline-finger-tabs > div.content > div").style.display = "none"});
    document.querySelector("#scroll-content > div > lucid-chart-dashboard-tabs > lucid-inline-finger-tabs > div.tabs.no-margin > lucid-finger-tab.light.horizontal.underline-style.suite-homepage.selected").addEventListener("click", waitingFor(0, 100, 50));

  } catch(error) {console.log(error);}
}
//Function to wait for the webpage to load before changing.
function waitingFor(count, delay, tries) {
    var el = document.querySelector("#scroll-content > div > lucid-chart-dashboard-tabs > lucid-inline-finger-tabs > div.content > lucid-chart-dashboard-header > div > lucid-carousel > div > div.carousel-wrapper.right-showing"), // match case
        count_local = count || 0,    // initial count value, or... ok only 0 makes sense here
        delay_local = delay || 200,  // initial delay value, or from function call
        tries_local = tries || 10;   // initial tries value, or from function call
    if (el!=null) {
        changeTable();
    } else if (count_local < tries_local) {
        setTimeout(function () {
            waitingFor(count_local + 1, delay_local, tries_local)
        }, delay_local);
    }
}
//50 attempts with 100 ms inbetween to wait for the page to load.
waitingFor(0, 100, 50);
