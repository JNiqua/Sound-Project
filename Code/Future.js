"use strict";
var Marketplace;
(function (Marketplace) {
    class Future extends Marketplace.AudioScene {
        constructor(_music, _loopSound1, _genSound1, _genSound2, _genSound3) {
            super(_music);
            this.loopSound1 = _loopSound1;
            this.genSound1 = _genSound1;
            this.genSound2 = _genSound2;
            this.genSound3 = _genSound3;
        }
        playLoopSound() {
            this.music.loop = true;
            this.music.play();
            this.loopSound1.loop = true;
            this.loopSound1.play();
        }
        playGenSound(_randomizer) {
            switch (_randomizer) {
                case 1:
                    this.genSound1.play();
                case 2:
                    this.genSound2.play();
                case 3:
                    this.genSound3.play();
            }
        }
    }
    Marketplace.Future = Future;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Future.js.map