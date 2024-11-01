/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan Haimanot
 * Created on: Oct 2024
 * This program counts down using neopixels
*/

// setup
let neopixelStrip: neopixel.Strip = null
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.show()

// start
input.onButtonPressed(Button.A, function () {
    let loopcount = 4


// light up
    while (loopcount >= 0) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))

    // > 0
    if (loopcount > 0) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    }

    // > 1
    if (loopcount > 1) {
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    }

    // > 2
    if (loopcount > 2) {
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    }

    // > 3
    if (loopcount > 3) {
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    }

    
        neopixelStrip.show()
        basic.pause(1000)
        basic.showNumber(loopcount)
        basic.showIcon(IconNames.Happy)
        loopcount--
        }
    
        })
    