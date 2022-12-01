input.onButtonPressed(Button.A, function () {
    if (e == 0) {
        if (d == 0) {
            a = randint(1, 9)
            b = randint(1, 99)
            c = a * b
            d = 1
            proportionalFont.showSpace(5, 150)
            proportionalFont.showString("" + a + "x" + b, 150)
            proportionalFont.showSpace(5, 150)
        } else {
            proportionalFont.showSpace(5, 150)
            proportionalFont.showString("" + a + "x" + b, 150)
            proportionalFont.showSpace(5, 150)
        }
    } else {
        if (d == 0) {
            c = randint(1, 9)
            b = randint(1, 99)
            a = c * b
            d = 1
            proportionalFont.showSpace(5, 150)
            proportionalFont.showString("" + a + "/" + b, 150)
            proportionalFont.showSpace(5, 150)
        } else {
            proportionalFont.showSpace(5, 150)
            proportionalFont.showString("" + a + "/" + b, 150)
            proportionalFont.showSpace(5, 150)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (e == 0) {
        e = 1
        basic.showLeds(`
            . . . # #
            . . # # #
            . # # # .
            # # # . .
            # # . . .
            `)
    } else {
        e = 0
        basic.showLeds(`
            # # . # #
            # # # # #
            . # # # .
            # # # # #
            # # . # #
            `)
    }
    d = 0
})
input.onButtonPressed(Button.B, function () {
    proportionalFont.showSpace(5, 150)
    proportionalFont.showNumber(c, 150)
    proportionalFont.showSpace(5, 150)
    d = 0
})
let c = 0
let b = 0
let a = 0
let e = 0
let d = 0
basic.showLeds(`
    # # . # #
    # # # # #
    . # # # .
    # # # # #
    # # . # #
    `)
d = 0
e = 0
