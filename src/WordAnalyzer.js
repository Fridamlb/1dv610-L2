export default class WordAnalyzer {
    constructor(text) {
        this.text = text
    }

    countWords() {
        if (!this.text) return 0
        const words = this.text.match(/\b\w+\b/g) || []
        return words.length
    }
}