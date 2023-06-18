chrome.action.onClicked.addListener(function (tab) {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: handleColorPickerClick,
    });
});

function handleColorPickerClick() {
    document.addEventListener("click", function (event) {
        var selectedElement = event.target;
        var selectedColor = window.getComputedStyle(selectedElement).getPropertyValue('background-color');

        chrome.runtime.sendMessage({ color: selectedColor });
    });
}