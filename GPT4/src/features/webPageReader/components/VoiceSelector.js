export function VoiceSelector({ voices, onVoiceChange }) {
    return (
        <select id="voices" onChange={(e) => onVoiceChange(e.target.value)}>
            {voices.map((voice) => (
                <option key={voice.voiceName} value={voice.voiceName}>
                    {voice.voiceName} ({voice.lang})
                </option>
            ))}
        </select>
    );
}
