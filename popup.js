chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("Selected color:", message.color);
});