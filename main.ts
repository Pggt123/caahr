let strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.rgb(255, 255, 255))
})
