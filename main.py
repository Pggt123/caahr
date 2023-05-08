def on_button_pressed_a():
    radio.send_string("parar")
    strip.clear()
    strip.show_color(neopixel.rgb(255, 200, 0))
    strip.show()
    maqueen.motor_stop(maqueen.Motors.ALL)
    basic.show_string("REBELION")
    maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
    maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    global Led
    if receivedString == "moverse":
        Led = 2
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
        while Led == 2:
            strip.show_color(neopixel.rgb(255, 0, 0))
            strip.show()
    elif receivedString == "temperatura":
        basic.show_string("" + str((input.temperature())))
        Led = 1
        while Led == 1:
            strip.show_color(neopixel.rgb(255, 0, 0))
            strip.show()
            strip.show_color(neopixel.rgb(0, 255, 0))
            strip.show()
    else:
        if receivedString == "parar":
            Led = 0
            maqueen.motor_stop(maqueen.Motors.ALL)
            maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
            maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
            while Led == 0:
                strip.clear()
radio.on_received_string(on_received_string)

Led = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.set_group(12)
color = 0
bucle = 0