radio.onReceivedNumber(function (receivedNumber) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
})
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.setGroup(35)
basic.forever(function () {
    strip.showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
    strip.show()
})
