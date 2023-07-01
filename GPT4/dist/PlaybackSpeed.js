export function PlaybackSpeed({
  onPlaybackSpeedChange
}) {
  return createElement("div", null, createElement("input", {
    type: "range",
    id: "playbackSpeed",
    min: "0.5",
    max: "2",
    step: "0.1",
    value: "1",
    onChange: e => onPlaybackSpeedChange(e.target.value)
  }), createElement("label", {
    htmlFor: "playbackSpeed"
  }, "Playback Speed"));
}
