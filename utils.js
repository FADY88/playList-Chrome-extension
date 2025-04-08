export async function getActiveTabURL() {
  const tabs = await chrome.tabs.query({
    currentWindow: true,
    active: true,
  });

  return tabs[0];
}

// code to get total hours of video in a youtube page
// let a = 0;
// document
//   .querySelectorAll("div > badge-shape > div.badge-shape-wiz__text")
//   .forEach((e) => (a += +e.innerText.replace(":", ".")));
// a / 60;
