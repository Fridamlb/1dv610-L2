import WordAnalyzer from './WordAnalyzer.js'
import SentenceAnalyzer from './SentenceAnalyzer.js'

export default class DocumentStats {
    constructor(text) {
        this.text = text;
        this.wordAnalyzer = new WordAnalyzer(text)
        this.sentenceAnalyzer = new SentenceAnalyzer(text)
    }
    getWordCount() {
      return this.wordAnalyzer.countWords()
    }

    getSentenceCount() {
      return this.sentenceAnalyzer.countSentences()
    }

     summary() {
        return {
            words: this.getWordCount(),
            sentences: this.getSentenceCount()
        }
    }
  }