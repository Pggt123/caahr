radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 1500)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 1500)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.setGroup(35)
let color = 0
basic.forever(function () {
    for (let index = 0; index < 255; index++) {
        color += 1
        strip.showColor(neopixel.rgb(color, 0, 0))
        strip.show()
    }
})
