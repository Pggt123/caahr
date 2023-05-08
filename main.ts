input.onPinPressed(TouchPin.P0, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("parar")
    strip.clear()
    strip.showColor(neopixel.rgb(255, 200, 0))
    strip.show()
    maqueen.motorStop(maqueen.Motors.All)
    basic.showString("REBELION")
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "moverse") {
        Led = 2
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        while (Led == 2) {
            strip.showColor(neopixel.rgb(255, 0, 0))
            strip.show()
        }
    } else if (receivedString == "temperatura") {
        basic.showString("" + input.temperature())
        Led = 1
        while (Led == 1) {
            strip.showColor(neopixel.rgb(255, 0, 0))
            strip.show()
            strip.showColor(neopixel.rgb(0, 255, 0))
            strip.show()
        }
    } else if (receivedString == "parar") {
        Led = 0
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        while (Led == 0) {
            strip.clear()
        }
    }
})
let Led = 0
let strip: neopixel.Strip = null
let bucle = 0
let color = 0
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.setGroup(12)
