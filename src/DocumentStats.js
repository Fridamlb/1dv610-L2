import WordAnalyzer from './WordAnalyzer.js'
import SentenceAnalyzer from './SentenceAnalyzer.js'
import ParagraphAnalyzer from './ParagraphAnalyzer.js'
import TitleExtractor from './TitleExtractor.js'

export default class DocumentStats {
    constructor(text) {
        this.text = text;
        this.wordAnalyzer = new WordAnalyzer(text)
        this.sentenceAnalyzer = new SentenceAnalyzer(text)
        this.paragraphAnalyzer = new ParagraphAnalyzer(text)
        this.titleExtractor = new TitleExtractor(text)
    }
    getWordCount() {
      return this.wordAnalyzer.countWords()
    }

    getSentenceCount() {
      return this.sentenceAnalyzer.countSentences()
    }

    getParagraphCount() {
      return this.paragraphAnalyzer.countParagraphs()
    }
    getTitles() {
      return this.titleExtractor.extractTitles()
    }

     summary() {
        return {
            words: this.getWordCount(),
            sentences: this.getSentenceCount(),
            paragraphs: this.getParagraphCount(),
            titles: this.getTitles()
        }
    }
  }