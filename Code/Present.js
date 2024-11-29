"use strict";
var Marketplace;
(function (Marketplace) {
    class Present extends Marketplace.AudioScene {
        constructor(_music, _loopSound1, _loopSound2, _loopSound3, _genSound1, _genSound2, _genSound3, _genSound4) {
            super(_music);
            this.loopSound1 = _loopSound1;
            this.loopSound2 = _loopSound2;
            this.loopSound3 = _loopSound3;
            this.genSound1 = _genSound1;
            this.genSound2 = _genSound2;
            this.genSound3 = _genSound3;
            this.genSound4 = _genSound4;
        }
        playLoopSound() {
            this.music.loop = true;
            this.music.play();
            this.loopSound1.loop = true;
            this.loopSound1.play();
            this.loopSound2.loop = true;
            this.loopSound2.play();
            this.loopSound3.loop = true;
            this.loopSound3.play();
        }
        playGenSound(_randomizer) {
            switch (_randomizer) {
                case 1:
                    this.genSound1.play();
                case 2:
                    this.genSound2.play();
                case 3:
                    this.genSound3.play();
                case 4:
                    this.genSound4.play();
            }
        }
    }
    Marketplace.Present = Present;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Present.js.map