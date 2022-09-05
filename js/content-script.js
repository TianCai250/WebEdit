// 可对页面dom操作
/**
 * 监听 background 传来的 数据
 */
chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  if (data.designMode == "on") {
    document.designMode = "on";
  } else {
    document.designMode = "off";
  }
});
