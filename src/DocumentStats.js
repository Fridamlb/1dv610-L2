import WordAnalyzer from './WordAnalyzer.js'
import SentenceAnalyzer from './SentenceAnalyzer.js'
import ParagraphAnalyzer from './ParagraphAnalyzer.js'
import TitleExtractor from './TitleExtractor.js'
import LanguageAnalyzer from './LanguageAnalyzer.js'
import WordSearch from './WordSearch.js'

export default class DocumentStats {
  constructor(text) {
    this.text = text
    this.wordAnalyzer = new WordAnalyzer(text)
    this.sentenceAnalyzer = new SentenceAnalyzer(text)
    this.paragraphAnalyzer = new ParagraphAnalyzer(text)
    this.titleExtractor = new TitleExtractor(text)
    this.languageAnalyzer = new LanguageAnalyzer(text)
    this.wordSearch = new WordSearch(text)
  }
  getWordCount() {
    return this.wordAnalyzer.countWords()
  }

  getLongestWord() {
    return this.wordAnalyzer.getLongestWord()
  }

  getShortestWord() {
    return this.wordAnalyzer.getShortestWord()
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

  getLanguage() {
    return this.languageAnalyzer.detectLanguage()
  }
  searchWord(word) {
    return this.wordSearch.searchWord(word)
  }

  summary() {
    return {
      words: this.getWordCount(),
      sentences: this.getSentenceCount(),
      paragraphs: this.getParagraphCount(),
      titles: this.getTitles(),
      language: this.getLanguage(),
      longestWord: this.getLongestWord(),
      shortestWord: this.getShortestWord(),
    }
  }
}