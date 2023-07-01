// let audio = new Audio();

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === "togglePlay") {
//         if (audio.paused) {
//             audio.play();
//         } else {
//             audio.pause();
//         }
//     } else if (request.action === "stop") {
//         audio.pause();
//         audio.currentTime = 0;
//     } else if (request.action === "setPlaybackSpeed") {
//         audio.playbackRate = parseFloat(request.value);
//     } else if (request.action === "setVoice") {
//         // Assuming you have a function to get the voice URL based on the selected voice
//         const voiceUrl = getVoiceUrl(request.value);
//         audio.src = voiceUrl;
//     }
// });




// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getTabUrl') {
        // Send the current tab's URL back to the popup
        sendResponse({ tabUrl: window.location.href });
    }
});
