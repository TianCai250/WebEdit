// 浏览器后台运行

const sendData = (data) => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, data, (res) => {});
    }
  );
};

const contextMenus = {
  id: "openDesignMode",
  title: "开启编辑模式",
  type: "checkbox",
  contexts: ["page"],
  onclick: function () {
    sendData({ designMode: "on" });
  },
};

chrome.contextMenus.create(contextMenus);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  sendData(message);
});
