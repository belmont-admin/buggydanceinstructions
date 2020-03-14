input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.A, function () {
    list = [1, 2, -2]
    text_list = ["red", "blue", "green"]
    while (list.length > 0) {
        radio.sendNumber(list.shift())
        radio.sendString("" + (text_list.shift()))
        basic.pause(1000)
    }
    radio.sendNumber(0)
})
let text_list: string[] = []
let list: number[] = []
radio.setGroup(100)
basic.showArrow(ArrowNames.North)
