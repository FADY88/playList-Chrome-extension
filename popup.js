import { getActiveTabURL } from "./utils.js";

function getDuration(duration) {
  let element = document.getElementById("duration");
  element.innerText = duration;
  return;
}

document.getElementById("btn").onclick = async () => {
  const activeTab = await getActiveTabURL();
  chrome.tabs.sendMessage(activeTab.id, {}, getDuration);
};
