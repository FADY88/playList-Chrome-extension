(() => {
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return [hours, minutes, seconds];
  };

  const getSeconds = (elements) => {
    let totalSeconds = 0;
    elements.forEach((e) => {
      const parts = e.innerText.split(":").map((part) => +part.trim());
      while (parts.length < 3) parts.unshift(0); // pad with zeros if needed
      const [hours, minutes, seconds] = parts;
      totalSeconds += hours * 3600 + minutes * 60 + seconds;
    });
    return totalSeconds;
  };

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    if (window.location.href.includes("https://www.youtube.com/playlist")) {
      // console.log("in youtube");
      let videos = document.querySelectorAll(
        "div > badge-shape > div.badge-shape-wiz__text"
      );
      if (!videos) {
        // console.log("no videos");
        response("this is not a playlist page");
        return;
      }
      let a = getSeconds(videos);

      console.log(a);
      let [hours, minutes, seconds] = formatTime(a);
      response(`${hours} H : ${minutes} M : ${seconds} S`);
    } else {
      // console.log("not in youtube");
      response("this is not a YouTube playlist");
      return;
    }
  });
})();
