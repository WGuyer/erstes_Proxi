input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let Ton = 200
for (let index = 0; index < 55; index++) {
    Ton = Math.round(Ton * 1.3)
    music.playTone(Ton, music.beat(BeatFraction.Eighth))
    basic.showString("" + (Ton))
    if (Ton > 1388) {
        break;
    }
}
