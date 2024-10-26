document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetch-title').addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs.length > 0) {
                var currentTab = tabs[0];
                document.getElementById('title-display').innerText = currentTab.title;
            } else {
                document.getElementById('title-display').innerText = "No active tab found.";
            }
        });
    });
});
