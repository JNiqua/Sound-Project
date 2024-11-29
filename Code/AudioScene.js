"use strict";
var Marketplace;
(function (Marketplace) {
    class AudioScene {
        // genSound2: HTMLAudioElement;
        // genSound3: HTMLAudioElement;
        // genSound4: HTMLAudioElement;
        constructor(_music, _loopSound, _genSound1 /*, _genSound2: HTMLAudioElement, _genSound3: HTMLAudioElement, _genSound4: HTMLAudioElement*/) {
            this.music = _music;
            this.loopSound = _loopSound;
            this.genSound1 = _genSound1;
            // this.genSound2 = _genSound2;
            // this.genSound3 = _genSound3;
            // this.genSound4 = _genSound4;
        }
        playSound() { }
        playGenSound(_randomizer) { }
    }
    Marketplace.AudioScene = AudioScene;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=AudioScene.js.map