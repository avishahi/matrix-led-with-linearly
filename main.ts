/**
 * Control of the LED screen.
 */
//% color=#5C2D91 weight=101 icon="\uf205"
namespace stem {
    /**
     * Get the on/off state of the specified LED using x, y coordinates. (0,0) is upper left.
     * @param x the horizontal coordinate of the LED
     * @param y the vertical coordinate of the LED
     */
    //% help=led/point weight=76
    //% blockId=device_point block="point|x %x|y %y"
    //% parts="ledmatrix"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1
    

    /**
     * Inverts the current LED display
     */
    //% help=led/toggle-all
    //% parts="ledmatrix"
    export function toggleAll(): void {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                led.toggle(i, j);
            }
        }
    }

    /**
     * Fades in the screen display.
     * @param ms fade time in milleseconds
     */
    //% help=led/fade-in
    //% parts="ledmatrix"
    export function fadeIn(ms: number = 700): void {
        if (ms < 20) {
            led.setBrightness(255);
            return;
        }
        let dt = 50;
        let brightness = led.brightness();
        let start = input.runningTime();
        let elapsed = 0;
        while (elapsed < ms) {
            led.setBrightness(brightness + ((255 - brightness) * elapsed) / ms);
            basic.pause(dt);
            elapsed = input.runningTime() - start;
        }
        led.setBrightness(255);
    }

    /**
     * Fades out the screen brightness.
     * @param ms fade time in milliseconds
     */
    //% help=led/fade-out
    //% parts="ledmatrix"
    export function fadeOut(ms: number = 700): void {
        if (ms < 20) {
            led.setBrightness(0);
            return;
        }
        let brightness = led.brightness();
        let dt = 50;
        let start = input.runningTime();
        let elapsed = 0;
        while (elapsed < ms) {
            led.setBrightness(brightness - (brightness * elapsed) / ms);
            basic.pause(dt);
            elapsed = input.runningTime() - start;
        }
        led.setBrightness(0);
    }
}
