import { PlayButton } from "./components/PlayButton";
import { StopButton } from "./components/StopButton";
import { PlaybackSpeed } from "./components/PlaybackSpeed";
import { VoiceSelector } from "./components/VoiceSelector";

export function WebPageReader({
    isPlaying,
    voices,
    onTogglePlay,
    onStop,
    onPlaybackSpeedChange,
    onVoiceChange,
}) {
    return (
        <div>
            <h1>Web Page Reader</h1>
            <PlayButton isPlaying={isPlaying} onTogglePlay={onTogglePlay} />
            <StopButton onStop={onStop} />
            <PlaybackSpeed onPlaybackSpeedChange={onPlaybackSpeedChange} />
            <VoiceSelector voices={voices} onVoiceChange={onVoiceChange} />
        </div>
    );
}
