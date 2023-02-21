radio.onReceivedNumber(function (receivedNumber) {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    basic.clearScreen()
})
basic.showString("god morgen")
radio.setGroup(1)
