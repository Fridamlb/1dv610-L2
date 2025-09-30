import DocumentStats from '../src/DocumentStats.js'

console.log(' MANUELLA TESTFALL\n')

// TEST 1: Räkna ord
console.log('TEST 1: Räkna ord')
console.log('Input: "Detta är ett test"')
const test1 = new DocumentStats('Detta är ett test')
console.log('Förväntat: 4')
console.log('Resultat:', test1.getWordCount())
console.log('Status:', test1.getWordCount() === 4 ? '✅ PASS' : '❌ FAIL')
console.log()

// TEST 2: Tom text
console.log('TEST 2: Tom text')
console.log('Input: ""')
const test3 = new DocumentStats('')
console.log('Förväntat: 0')
console.log('Resultat:', test3.getWordCount())
console.log('Status:', test3.getWordCount() === 0 ? '✅ PASS' : '❌ FAIL')
console.log()

// TEST 3: Räkna meningar
console.log('TEST 3: Räkna meningar')
console.log('Input: "Första. Andra! Tredje?"')
const test4 = new DocumentStats('Första. Andra! Tredje?')
console.log('Förväntat: 3')
console.log('Resultat:', test4.getSentenceCount())
console.log('Status:', test4.getSentenceCount() === 3 ? '✅ PASS' : '❌ FAIL')
console.log()

// TEST 4: Hitta längsta ordet
console.log('TEST 4: Hitta längsta ordet')
console.log('Input: "kort medellång längsta"')
const test5 = new DocumentStats('kort medellång längsta')
console.log('Förväntat: "medellång"')
console.log('Resultat:', test5.getLongestWord())
console.log('Status:', test5.getLongestWord() === 'medellång' ? '✅ PASS' : '❌ FAIL')
console.log()

// TEST 5: Hitta kortaste ordet
console.log('TEST 5: Hitta kortaste ordet')
console.log('Input: "kort medellång längsta"')
const test6 = new DocumentStats('kort medellång längsta')
console.log('Förväntat: "kort"')
console.log('Resultat:', test6.getShortestWord())
console.log('Status:', test6.getShortestWord() === 'kort' ? '✅ PASS' : '❌ FAIL')
console.log()

// TEST 6: Språkdetektering - Svenska
console.log('TEST 6: Språkdetektering - Svenska')
console.log('Input: "Det här är en svensk text med åäö och flera vanliga svenska ord"')
const test7 = new DocumentStats('Det här är en svensk text med åäö och flera vanliga svenska ord')
const lang7 = test7.getLanguage()
console.log('Förväntat: Swedish')
console.log('Resultat:', lang7.language)
console.log('Status:', lang7.language === 'Swedish' ? '✅ PASS' : '❌ FAIL')
console.log()

// TEST 7: Språkdetektering - Engelska
console.log('TEST 7: Språkdetektering - Engelska')
console.log('Input: "This is an English text with the and a lot of common English words"')
const test8 = new DocumentStats('This is an English text with the and a lot of common English words')
const lang8 = test8.getLanguage()
console.log('Förväntat: English')
console.log('Resultat:', lang8.language)
console.log('Status:', lang8.language === 'English' ? '✅ PASS' : '❌ FAIL')
console.log()

// TEST 8: Extrahera titlar
console.log('TEST 8: Extrahera titlar')
const titleText = `En Titel Här

Detta är text.

En Annan Titel`
console.log('Input: Text med två titlar')
const test9 = new DocumentStats(titleText)
const titles = test9.getTitles()
console.log('Förväntat: 2 titlar')
console.log('Resultat:', titles.length, 'titlar')
console.log('Titlar:', titles)
console.log('Status:', titles.length === 2 ? '✅ PASS' : '❌ FAIL')
console.log()

// TEST 9: Söka efter ord
console.log('TEST 9: Söka efter ord')
console.log('Input: "detta är ett test detta är detta"')
const test10 = new DocumentStats('detta är ett test detta är detta')
console.log('Förväntat: 3 förekomster av "detta"')
console.log('Resultat:', test10.searchWord('detta'))
console.log('Status:', test10.searchWord('detta') === 3 ? '✅ PASS' : '❌ FAIL')
console.log()

// TEST 10: Räkna stycken - Enkelt fall
console.log('TEST 10: Räkna stycken - Enkelt fall')
console.log('Input: "Första stycket.\\n\\nAndra stycket."')
const testX = new DocumentStats('Första stycket.\n\nAndra stycket.')
console.log('Förväntat: 2')
console.log('Resultat:', testX.getParagraphCount())
console.log('Status:', testX.getParagraphCount() === 2 ? '✅ PASS' : '❌ FAIL')
console.log()
