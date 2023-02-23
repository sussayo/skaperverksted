radio.onReceivedNumber(function (receivedNumber) {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    basic.clearScreen()
})
let reading = 0
basic.showString("god morgen")
radio.setGroup(1)
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    reading,
    1023
    )
    if (true) {
        basic.showNumber(reading)
    }
    radio.sendNumber(3)
})
