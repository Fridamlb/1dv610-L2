import DocumentStats from '../src/DocumentStats.js'

const testText = `
Detta är en Titel

Det här är en första mening. Detta är en andra mening! 
Och detta är en tredje mening?

Detta är ett nytt stycke med mer text. 
Det innehåller flera meningar också.

En Annan Titel

Mer text här.
`

const stats = new DocumentStats(testText)

console.log('DOKUMENTSTATISTIK')
console.log('Ord:', stats.getWordCount())
console.log('Meningar:', stats.getSentenceCount())
console.log('Stycken:', stats.getParagraphCount())
console.log('Titlar:', stats.getTitles())
console.log('Språk:', stats.getLanguage())
console.log('\nSök efter "detta":', stats.searchWord('detta'))
console.log('\nFULLSTÄNDIG SAMMANFATTNING')
console.log(stats.summary())