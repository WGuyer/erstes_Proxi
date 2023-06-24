def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

for index in range(3):
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.ring_tone(453)