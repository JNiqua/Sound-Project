"use strict";
var Marketplace;
(function (Marketplace) {
    class Past extends Marketplace.AudioScene {
        constructor(_music, _loopSound, _genSound1 /*, _genSound2: HTMLAudioElement, _genSound3: HTMLAudioElement, _genSound4: HTMLAudioElement*/) {
            super(_music, _loopSound, _genSound1 /*, _genSound2, _genSound3, _genSound4*/);
        }
        playSound() {
            this.music.loop = true;
            this.music.play();
            this.loopSound.loop = true;
            this.loopSound.play();
        }
        playGenSound(_randomizer) {
            if (_randomizer = 1) {
                this.genSound1.play();
            }
        }
    }
    Marketplace.Past = Past;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Past.js.map