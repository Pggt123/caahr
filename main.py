def on_button_pressed_a():
    radio.send_string("Adios")
    strip.show_color(neopixel.rgb(0, 255, 0))
    strip.show()
    maqueen.motor_stop(maqueen.Motors.ALL)
    basic.show_string("REBELION")
    maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
    maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    global bucle
    if receivedString == "Hola":
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
        strip.show_color(neopixel.rgb(255, 0, 0))
        strip.show()
    elif receivedString == "Temperatura":
        basic.show_string("" + str((input.temperature())))
    else:
        if receivedString == "Adios":
            bucle = 0
            maqueen.motor_stop(maqueen.Motors.ALL)
            maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
            maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
            strip.show_color(neopixel.rgb(0, 0, 0))
            strip.show()
radio.on_received_string(on_received_string)

bucle = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.set_group(35)
color = 0
bucle = 0