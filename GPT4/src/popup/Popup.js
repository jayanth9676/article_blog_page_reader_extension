// import { WebPageReader } from "../features/webPageReader";

// export function Popup({
//     isPlaying,
//     voices,
//     onTogglePlay,
//     onStop,
//     onPlaybackSpeedChange,
//     onVoiceChange,
// }) {
//     return (
//         <div>
//             <WebPageReader
//                 isPlaying={isPlaying}
//                 voices={voices}
//                 onTogglePlay={onTogglePlay}
//                 onStop={onStop}
//                 onPlaybackSpeedChange={onPlaybackSpeedChange}
//                 onVoiceChange={onVoiceChange}
//             />
//         </div>
//     );
// }



// document.addEventListener("DOMContentLoaded", () => {
//     const playButton = document.getElementById("playButton");
//     const stopButton = document.getElementById("stopButton");
//     const playbackSpeed = document.getElementById("playbackSpeed");
//     const voices = document.getElementById("voices");

//     playButton.addEventListener("click", () => {
//         chrome.runtime.sendMessage({ action: "togglePlay" });
//     });

//     stopButton.addEventListener("click", () => {
//         chrome.runtime.sendMessage({ action: "stop" });
//     });

//     playbackSpeed.addEventListener("change", (e) => {
//         chrome.runtime.sendMessage({
//             action: "setPlaybackSpeed",
//             value: e.target.value,
//         });
//     });

//     voices.addEventListener("change", (e) => {
//         chrome.runtime.sendMessage({
//             action: "setVoice",
//             value: e.target.value,
//         });
//     });
// });



import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { WebPageReader } from "../features/webPageReader";

// Render the WebPageReader component in the popup
ReactDOM.render(<WebPageReader />, document.getElementById("app"));

// Send a message to the content script to get the current tab's URL
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "getTabUrl" }, (response) => {
        console.log("Current tab URL:", response.tabUrl);
    });
});
