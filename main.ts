basic.showIcon(IconNames.Butterfly)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showIcon(IconNames.Butterfly)
    basic.pause(200)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        # # . # #
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . # . # .
        . # . # .
        . . # . .
        . . # . .
        `)
})
