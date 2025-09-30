export default class ParagraphAnalyzer {
    constructor(text) {
        this.text = text
    }

    countParagraphs() {
        if (!this.text) return 0
        const paragraphs = this.text
            .split(/\n\s*\n/)
            .map(p => p.trim())
            .filter(p => p.length > 0)
        return paragraphs.length
    }
}
