input.onButtonPressed(Button.A, function () {
    function playMusic (){
       music.play(music.stringPlayable("C5 B A G F E D C ", 190), music.PlaybackMode.UntilDone)
   }
plotgame()
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    playMusic();
plotgame()
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    playMusic();
plotgame()
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    playMusic();
plotgame()
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    playMusic();
plotgame()
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    playMusic();
plotgame()
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    playMusic();
plotgame()
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    playMusic();
plotgame()
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    playMusic();
plotgame()
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    playMusic();
plotgame()
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # . .
        . # . # .
        . # . . #
        `)
    playMusic();
plotgame()
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # . .
        `)
    playMusic();
plotgame()
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    playMusic();
plotgame()
    basic.showLeds(`
        # . . # .
        # # . # .
        # . # # .
        # . . # .
        # . . # .
        `)
    playMusic();
})
function plotgame () {
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
}
