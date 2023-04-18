let dood = 0
let voeden = 20
let knuffel = 20
basic.forever(function () {
    if (dood == 0 && input.buttonIsPressed(Button.A)) {
        voeden += 5
    }
    if (dood == 0 && input.buttonIsPressed(Button.B)) {
        knuffel += 5
    }
    if (dood == 1 && input.buttonIsPressed(Button.A)) {
        knuffel += 0
    }
    if (dood == 1 && input.buttonIsPressed(Button.B)) {
        voeden += 0
    }
})
basic.forever(function () {
    knuffel += -1
    voeden += -1
    basic.pause(1000)
})
basic.forever(function () {
    if (voeden <= 0 || knuffel <= 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
        dood = 1
    }
    if (voeden > 10 && knuffel > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (voeden > 0 && voeden <= 10 || knuffel > 0 && knuffel <= 10) {
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
	
})
