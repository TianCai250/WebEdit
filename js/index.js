window.onload = () => {
    const openBtn = document.getElementById('openBtn')
    const stopBtn = document.getElementById('stopBtn')
    openBtn.onclick = function() {
        chrome.runtime.sendMessage({designMode: 'on'})
    }
    stopBtn.onclick = function() {
        chrome.runtime.sendMessage({designMode: 'off'})
    }
}