"use strict";
var Marketplace;
(function (Marketplace) {
    class Past extends Marketplace.AudioScene {
        constructor(_music, _loopSound1, _genSound1, _genSound2, _genSound3, _genSound4, _genSound5, _genSound6, _genSound7) {
            super(_music);
            this.loopSound1 = _loopSound1;
            this.genSound1 = _genSound1;
            this.genSound2 = _genSound2;
            this.genSound3 = _genSound3;
            this.genSound4 = _genSound4;
            this.genSound5 = _genSound5;
            this.genSound6 = _genSound6;
            this.genSound7 = _genSound7;
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
                case 4:
                    this.genSound4.play();
                case 5:
                    this.genSound5.play();
                case 6:
                    this.genSound6.play();
                case 7:
                    this.genSound7.play();
            }
        }
    }
    Marketplace.Past = Past;
})(Marketplace || (Marketplace = {}));
//# sourceMappingURL=Past.js.map