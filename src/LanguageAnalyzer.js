export default class LanguageAnalyzer {
    constructor(text) {
        this.text = text
    }

    detectLanguage() {
        if (!this.text || this.text.trim().length < 5) {
            return { language: 'unknown', confidence: 0 }
        }

        const text = this.text.toLowerCase()
        let swedishScore = 0
        let englishScore = 0

        // 1. Kolla svenska tecken (å, ä, ö)
        const swedishChars = this.countSwedishCharacters(text)
        swedishScore += swedishChars * 2 // Ge högre vikt åt svenska tecken

        // 2. Kolla vanliga svenska ord
        const swedishWords = ['och', 'i', 'att', 'som', 'en', 'på', 'är', 'av', 'för', 'med', 'det', 'ett', 'var', 'ska']
        swedishScore += this.countCommonWords(text, swedishWords);

        // 3. Kolla vanliga engelska ord  
        const englishWords = ['the', 'and', 'is', 'in', 'to', 'of', 'a', 'that', 'it', 'with', 'for', 'are', 'this', 'but']
        englishScore += this.countCommonWords(text, englishWords)

        // 4. Kolla svenska detektorer
        const swedishDetecters = ['en', 'ett', 'det', 'den']
        swedishScore += this.countCommonWords(text, swedishDetecters)

        // 5. Kolla vanliga engelska detektorer
        const englishDetecters = ['the', 'a', 'an']
        englishScore += this.countCommonWords(text, englishDetecters)

        // Beräkna konfidens
        const totalScore = swedishScore + englishScore
        if (totalScore === 0) {
            return { language: 'unknown', confidence: 0 }
        }

        if (swedishScore > englishScore) {
            const confidence = (swedishScore / totalScore) * 100;
            return { language: 'Swedish', confidence: Math.min(confidence, 100).toFixed(1) }
        } else {
            const confidence = (englishScore / totalScore) * 100;
            return { language: 'English', confidence: Math.min(confidence, 100).toFixed(1) }
        }
    }

    countSwedishCharacters(text) {
        const swedishCharRegex = /[åäö]/g
        const matches = text.match(swedishCharRegex)
        return matches ? matches.length : 0
    }

    countCommonWords(text, words) {
        let count = 0
        const textWords = text.split(/\s+/)
        
        for (const word of textWords) {
            const cleanWord = word.replace(/[.,!?;:()]/g, '')
            if (words.includes(cleanWord)) {
                count++
            }
        }
        
        return count
    }
}