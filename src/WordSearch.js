export default class WordSearch {
  constructor(text) {
    this.text = text
  }

  // Sök efter specifikt ord
  searchWord(targetWord) {
    if (!this.text || !targetWord) {return 0}

    const words = this.extractWords()
    const lowerTarget = targetWord.toLowerCase()

    let count = 0
    for (const word of words) {
      if (word.toLowerCase() === lowerTarget) {
        count++
      }
    }
    return count
  }

  extractWords() {
    if (!this.text) {return []}
    return this.text
      .split(/\s+/)
      .map(word => word.replace(/[.,!?;:()"]/g, ''))
      .filter(word => word.length > 0)
  }
}