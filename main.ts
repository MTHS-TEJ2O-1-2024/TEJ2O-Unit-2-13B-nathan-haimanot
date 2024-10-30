/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan Haimanot
 * Created on: Oct 2024
 * This program counts down using neopixels
*/

let loopCounter = 5
let neopixelStrip: neopixel.Strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
input.onButtonPressed(Button.A, function () {
    let loopCounter = 5
    while (loopCounter > 0) {
    neopixelStrip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    loopCounter -= 1
    basic.showNumber(loopCounter)
    basic.clearScreen()
    }
basic.showIcon(IconNames.Happy)
})