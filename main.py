def on_received_number(receivedNumber):
    pass
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.set_group(35)

def on_forever():
    strip.show_color(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
    strip.show()
basic.forever(on_forever)
