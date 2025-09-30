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
        // För lång för titel
        if (words.length > 10 || words.length < 1) return false;
        
        // Inga punkt-tecken i titlar (undantag: förkortningar)
        if (line.includes('.') && !this.isAbbreviation(line)) return false;
        
        // Första ordet ska vara versaler (hela ordet)
        const firstWord = words[0];
        if (firstWord !== firstWord.toUpperCase()) return false;
        
        // Titlar slutar sällan med punkt
        if (line.trim().endsWith('.')) return false;
        
        return true;
    }
}