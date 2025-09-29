export default class TitleExtractor {
    constructor(text) {
        this.text = text
    }

    extractTitles() {
        if (!this.text) return []
        const lines = this.text.split('\n')
        const titles = [];
        for (let line of lines) {
            if (!line.trim()) continue;
            const words = line.trim().split(/\s+/)
            if (line[0] === line[0].toUpperCase() && words.length <= 10) {
                titles.push(line.trim())
            }
        }
        return titles
    }
}
