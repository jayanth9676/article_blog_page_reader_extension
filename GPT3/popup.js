import { togglePlay, stop, setPlaybackSpeed, setVoice } from "./content.js";

const playButton = document.getElementById("playButton");
const stopButton = document.getElementById("stopButton");
const playbackSpeed = document.getElementById("playbackSpeed");
const voices = document.getElementById("voices");

playButton.addEventListener("click", togglePlay);
stopButton.addEventListener("click", stop);
playbackSpeed.addEventListener("input", () =>
    setPlaybackSpeed(playbackSpeed.value)
);
voices.addEventListener("change", () => setVoice(voices.value));

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "play") {
        playButton.textContent = "Pause";
    } else if (request.action === "pause") {
        playButton.textContent = "Play";
    }
});

chrome.tabs.executeScript({ code: "document.body.innerText" }, (result) => {
    // const text = result[0].trim();
    const text = result[0].trim();
    chrome.tts.getVoices((voiceList) => {
        voiceList.forEach((voice) => {
            const option = document.createElement("option");
            option.value = voice.voiceName;
            option.textContent = `${voice.voiceName} (${voice.lang})`;
            voices.appendChild(option);
        });
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = parseFloat(
            document.getElementById("playbackSpeed").value
        );
        utterance.voice = speechSynthesis
            .getVoices()
            .find(
                (voice) =>
                    voice.voiceName === document.getElementById("voices").value
            );
        playButton.disabled = false;
        chrome.runtime.sendMessage({ action: "ready" });
    });
});
