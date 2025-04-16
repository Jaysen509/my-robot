hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setLED(ThreePort.Two, 100)
    basic.pause(1000)
    hummingbird.setLED(ThreePort.Two, 100)
    basic.pause(1000)
})
