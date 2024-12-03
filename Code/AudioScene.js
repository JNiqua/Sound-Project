"use strict";
var Marketplace;
(function (Marketplace) {
    class AudioScene {
        constructor(_music) {
            this.music = _music;
        }
        increaseVolume() { }
        decreaseVolume() { }
        playLoopSound() { }
        playGenSound(_randomizer) { }
    }
    Marketplace.AudioScene = AudioScene;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=AudioScene.js.map