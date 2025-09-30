export default class TitleExtractor {
    constructor(text) {
        this.text = text;
    }

    extractTitles() {
        if (!this.text) return []
        const lines = this.text.split('\n')
        const titles = [];
        
        for (let line of lines) {
            if (!line.trim()) continue;
            
            const words = line.trim().split(/\s+/)
            
            // Kolla om raden ser ut som en titel
            if (this.isTitleLine(line, words)) {
                titles.push(line.trim())
            }
        }
        return titles
    }

isTitleLine(line, words) {
    const trimmed = line.trim()

    // För kort eller för lång
    if (words.length < 2 || words.length > 20) return false

    // Om raden innehåller punkt mitt i, troligen inte en titel
    if (trimmed.slice(0, -1).includes('.')) return false

    // Börjar med stor bokstav
    const firstChar = trimmed[0]
    if (firstChar !== firstChar.toUpperCase()) return false

  // Slutar med skiljetecken? (punkt, frågetecken, utrop)
  const lastChar = trimmed[trimmed.length - 1]
  if (['.', '?', '!'].includes(lastChar)) return false

    return true
}
}