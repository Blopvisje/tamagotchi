let knuffel = 20
let voeden = 20
let dood = 0
basic.forever(function () {
    if (voeden <= 0 && knuffel <= 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    if (voeden > 10 && knuffel > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (dood == 1) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (voeden > 0 && voeden <= 10 && (knuffel > 0 && knuffel <= 10)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    knuffel += -1
    voeden += -1
    basic.pause(1000)
})
basic.forever(function () {
	
})
