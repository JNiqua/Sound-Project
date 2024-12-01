"use strict";
var Marketplace;
(function (Marketplace) {
    const audioCtx = new AudioContext();
    const audio = new Audio("/AudioFiles/Past/MarketMusic_Past.wav");
    const source = audioCtx.createMediaElementSource(audio);
    source.connect(audioCtx.destination);
    audio.volume = 4;
    audio.play();
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=test.js.map