let isPlaying = false;
let utterance = null;

function togglePlay() {
    if (!utterance || utterance.text.trim() === "") {
        alert("No text to read.");
        return;
    }
    if (isPlaying) {
        stop();
    } else {
        speechSynthesis.speak(utterance);
        isPlaying = true;
        chrome.runtime.sendMessage({ action: "play" });
    }
}

function stop() {
    if (isPlaying) {
        speechSynthesis.cancel();
        isPlaying = false;
        chrome.runtime.sendMessage({ action: "pause" });
    }
}

function setPlaybackSpeed(speed) {
    if (isPlaying) {
        speechSynthesis.cancel();
        utterance.rate = parseFloat(speed);
        speechSynthesis.speak(utterance);
    }
}

function setVoice(voiceName) {
    if (isPlaying) {
        speechSynthesis.cancel();
        utterance.voice = speechSynthesis
            .getVoices()
            .find((voice) => voice.voiceName === voiceName);
        speechSynthesis.speak(utterance);
    }
}

export { togglePlay, stop, setPlaybackSpeed, setVoice };
