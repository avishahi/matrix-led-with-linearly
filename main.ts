//% color=190 weight=100 icon="<i class="fal fa-bus-school"></i>" block="screenmagic Blocks"
namespace screenmagic {
    /**
     * Address leds linearly row first 
     */
    //* blockId= screenmagicplotat
    //* block="plot at $index"
    //% index.min=0 index.max=25
    export function plotmatrix(index: number): void {
        index |= 0
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot(x, y)
    }
}