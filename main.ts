radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 25500; index++) {
        color += 1
        strip.showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        strip.show()
        basic.pause(200)
    }
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    strip.showColor(neopixel.rgb(0, 0, 0))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.setGroup(35)
let color = 0
basic.forever(function () {
	
})
