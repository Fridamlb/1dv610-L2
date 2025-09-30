export default class WordAnalyzer {
  constructor(text) {
    this.text = text
  }

  countWords() {
    if (!this.text) {return 0}
    const words = this.text.match(/\b\w+\b/g) || []
    return words.length
  }

  getLongestWord() {
    const words = this.text.match(/[a-zA-ZåäöÅÄÖ]+/g) || []
    if (words.length === 0) {return ''}
    return words.reduce((longest, current) => 
      current.length > longest.length ? current : longest
    )
  }

  getShortestWord() {
    const words = this.text.match(/[a-zA-ZåäöÅÄÖ]+/g) || []
    if (words.length === 0) {return ''}
    return words.reduce((shortest, current) => 
      current.length < shortest.length ? current : shortest
    )
  }
}