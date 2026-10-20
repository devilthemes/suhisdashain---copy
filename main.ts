input.onButtonPressed(Button.A, function () {
    led.plot(1, 1)
    basic.pause(200)
    led.plot(1, 2)
    basic.pause(200)
    led.plot(1, 3)
    basic.pause(200)
    led.plot(1, 4)
    basic.pause(200)
    led.plot(2, 4)
    basic.pause(200)
    led.plot(3, 4)
    basic.pause(200)
    led.plot(3, 3)
    basic.pause(200)
    led.plot(3, 2)
    basic.pause(200)
    led.plot(3, 1)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 127), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    led.plot(1, 0)
    basic.pause(200)
    led.plot(2, 0)
    basic.pause(200)
    led.plot(3, 0)
    basic.pause(200)
    led.plot(2, 1)
    basic.pause(200)
    led.plot(2, 2)
    basic.pause(200)
    led.plot(2, 3)
    basic.pause(200)
    led.plot(1, 4)
    basic.pause(200)
    led.plot(2, 4)
    basic.pause(200)
    led.plot(3, 4)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 72), music.PlaybackMode.UntilDone)
    led.plot(1, 0)
    basic.pause(200)
    led.plot(1, 1)
    basic.pause(200)
    led.plot(2, 0)
    basic.pause(200)
    led.plot(3, 0)
    basic.pause(200)
    led.plot(1, 2)
    basic.pause(200)
    led.plot(2, 2)
    basic.pause(200)
    led.plot(3, 2)
    basic.pause(200)
    led.plot(3, 3)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 190), music.PlaybackMode.UntilDone)
    led.plot(0, 0)
    basic.pause(200)
    led.plot(0, 1)
    basic.pause(200)
    led.plot(0, 2)
    basic.pause(200)
    led.plot(0, 3)
    basic.pause(200)
    led.plot(0, 4)
    basic.pause(200)
    led.plot(1, 1)
    basic.pause(200)
    led.plot(2, 2)
    basic.pause(200)
    led.plot(3, 1)
    basic.pause(200)
    led.plot(4, 0)
    basic.pause(200)
    led.plot(4, 1)
    basic.pause(200)
    led.plot(4, 2)
    basic.pause(200)
    led.plot(4, 3)
    basic.pause(200)
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    led.plot(4, 4)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    led.plot(2, 0)
    basic.pause(200)
    led.plot(1, 1)
    basic.pause(200)
    led.plot(1, 2)
    basic.pause(200)
    led.plot(1, 3)
    basic.pause(200)
    led.plot(1, 4)
    basic.pause(200)
    led.plot(2, 2)
    basic.pause(200)
    led.plot(3, 1)
    basic.pause(200)
    led.plot(3, 2)
    basic.pause(200)
    led.plot(3, 3)
    basic.pause(200)
    led.plot(3, 4)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    led.plot(1, 0)
    basic.pause(200)
    led.plot(1, 1)
    basic.pause(200)
    led.plot(1, 2)
    basic.pause(200)
    led.plot(1, 3)
    basic.pause(200)
    led.plot(1, 4)
    basic.pause(200)
    led.plot(2, 2)
    basic.pause(200)
    led.plot(3, 0)
    basic.pause(200)
    led.plot(3, 1)
    basic.pause(200)
    led.plot(3, 2)
    basic.pause(200)
    led.plot(3, 3)
    basic.pause(200)
    led.plot(3, 4)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    led.plot(2, 0)
    basic.pause(200)
    led.plot(1, 1)
    basic.pause(200)
    led.plot(1, 2)
    basic.pause(200)
    led.plot(1, 3)
    basic.pause(200)
    led.plot(1, 4)
    basic.pause(200)
    led.plot(2, 2)
    basic.pause(200)
    led.plot(3, 1)
    basic.pause(200)
    led.plot(3, 2)
    basic.pause(200)
    led.plot(3, 3)
    basic.pause(200)
    led.plot(3, 4)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    led.plot(2, 0)
    basic.pause(200)
    led.plot(1, 1)
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    led.plot(1, 0)
    basic.pause(200)
    led.plot(1, 1)
    basic.pause(200)
    led.plot(1, 2)
    basic.pause(200)
    led.plot(1, 3)
    basic.pause(200)
    led.plot(1, 4)
    basic.pause(200)
    led.plot(2, 2)
    basic.pause(200)
    led.plot(3, 0)
    basic.pause(200)
    led.plot(3, 1)
    basic.pause(200)
    led.plot(3, 2)
    basic.pause(200)
    led.plot(3, 3)
    basic.pause(200)
    led.plot(3, 4)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 72), music.PlaybackMode.UntilDone)
})
led.plot(1, 0)
basic.pause(200)
led.plot(1, 1)
basic.pause(200)
led.plot(2, 0)
basic.pause(200)
led.plot(3, 0)
basic.pause(200)
led.plot(1, 2)
basic.pause(200)
led.plot(2, 2)
basic.pause(200)
led.plot(3, 2)
basic.pause(200)
led.plot(3, 3)
basic.pause(200)
led.plot(3, 2)
basic.pause(200)
led.plot(3, 4)
basic.pause(200)
led.plot(2, 4)
basic.pause(200)
led.plot(1, 4)
basic.pause(200)
led.plot(1, 0)
music.play(music.stringPlayable("C5 B A G F E D C ", 190), music.PlaybackMode.UntilDone)
