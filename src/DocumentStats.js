import WordAnalyzer from './WordAnalyzer.js'

export default class DocumentStats {
    constructor(text) {
        this.text = text;
        this.wordAnalyzer = new WordAnalyzer(text)
    }
    getWordCount() {
        return this.wordAnalyzer.getWordCount()
    }

     summary() {
        return {
            words: this.getWordCount()
        }
    }
  }