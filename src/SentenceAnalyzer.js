export default class SentenceAnalyzer {
    constructor(text) {
        this.text = text;
    }

    countSentences() {
        if (!this.text) return 0;
        const sentences = this.text.split(/(?<=[.!?])\s+/);
        return sentences.filter(s => s.trim().length > 0).length;
    }
}
