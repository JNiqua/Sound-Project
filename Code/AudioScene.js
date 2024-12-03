"use strict";
var Marketplace;
(function (Marketplace) {
    class AudioScene {
        constructor(_music) {
            this.music = _music;
        }
        increaseVolume(_intervalId) { }
        decreaseVolume(_intervalId) { }
        playLoopSound() { }
        playGenSound(_randomizer) { }
        pauseAudio() { }
    }
    Marketplace.AudioScene = AudioScene;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=AudioScene.js.map