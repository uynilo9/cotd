declare interface Console {
    /**
     * The `console.typing()`async function can make anything be typing in console.
     * 
     * ```js
     * await console.typing(
     * 'Hello World',  // Anything you wanna make it be typing in console
     * 375             // Typing speed. Unit: Millisecond (ms)
     * );
     * ```
     * 
     * @since v1.0.0
     * @param value Anything you wanna make it be typing in console
     * @param speed Typing speed. Unit: Millisecond (ms)
     */
    typing(value: any, speed?: number): Promise<void>;
    /**
     * The `console.deleting()`async function can make anything be deleting in console
     * 
     * ```js
     * await console.deleting(
     *     'Hello World',  // Anything you wanna make it be deleting in console
     *     250             // Deleting speed. Unit: Millisecond (ms)
     * );
     * ```
     * 
     * @since v1.0.0
     * @param value Anything you wanna make it be deleting in console
     * @param speed Typing speed. Unit: Millisecond (ms)
     */
    deleting(value: any, speed?: number): Promise<void>;
}