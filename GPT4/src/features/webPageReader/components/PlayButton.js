export function PlayButton({ isPlaying, onTogglePlay }) {
    return (
        <button id="playButton" onClick={onTogglePlay}>
            {isPlaying ? "Pause" : "Play"}
        </button>
    );
}
