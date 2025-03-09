/** Plugin Implementation for Wick Wrapper. */
export default class Plugin {
    /**
     * Plugin Class.
     * @prop {string} ClassName
     */
    constructor() {
        /**
         * @private - Don't use and/or change if you want your plugins working.
         */
        this.classname = "Plugin"
    }

    /**
     * @method Play - Called when the timeline starts playing.
     */
    play() {
        alert("Play Time!")
    }

    /**
     * @method Script - Called before playing/exporting, Recalled for every script of every object. 
     * @param {string} scriptName
     * @param {string} scriptSource 
     * @param {} object 
     */
    script(scriptName, scriptSource, object) {
        alert(`Script "${scriptName} of ${object}'s code is:
            ${scriptSource}"`);
    }

    load(filename, file64) {
        alert("You imported " + filename + "!")
    }
}