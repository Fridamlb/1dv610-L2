# Testrapport - Document Stats Analyzer

# Inledning 
Syftet med denna testning är att verifiera och validera funktionen i modulen `DocumentStats`.  
Testerna har utförts både manuellt och genom enklare automatiska tester i terminalen.

## Testmetod
- **Manuella tester (manuella-test.js)**kör testfall och jämför faktiskt resultat med förväntat resultat.
- **Automatiska tester (basic-test.js):** En statisk text matades in direkt i koden. Funktionen `DocumentStats` kördes och utdata loggades i terminalen.  
- **Terminaltester (terminal-test.js):** En enklare testapplikation där användaren kan klistra in text och få resultat direkt i terminalen. Detta validerar att modulen fungerar interaktivt och hanterar olika typer av input.

## FÖrutsättningar för testerna
- Klona eller ladda ner detta repository
- **Node.js** (version 18 eller senare rekommenderas eftersom projektet använder ES-moduler)
- **Inga externa testramverk** krävs – testerna körs direkt med Node.

## Hur manuella testerna körs
npm test i zsh terminal på mac.

## Hur Automatiska tester körs
npm run dev i zsh terminal på mac.

## Hur terminaltester körs
npm run start i zsh på mac

## Testresultat - Manuella tester

Här redovisas tester för modulen. Tabellen visar vad som testats, hur testet genomfördes samt resultatet. ✅ = PASS, ❌ = FAIL

| Test-ID | Vad som testats                | Hur det testats (Input + Förväntat)                                                                 | Testresultat |
|---------|--------------------------------|-----------------------------------------------------------------------------------------------------|--------------|
| TC1     | getWordCount() - räkna ord.    | Input: `"Detta är ett test"` <br> Förväntat: `4 ord`                                               | ✅ PASS      |
| TC2     | getWordCount() - tom text      | Input: `""` (tom sträng) <br> Förväntat: `0 ord`                                                   | ✅ PASS      |
| TC3     | getSentenceCount() - meningar  | Input: `"Första. Andra! Tredje?"` <br> Förväntat: `3 meningar`                                     | ✅ PASS      |
| TC4     | getLongestWord() - Längsta ord | Input: `"kort medellång längsta"` <br> Förväntat: `"medellång"`                                    | ✅ PASS      |
| TC5     | getShortestWord() - kortaste   | Input: `"kort medellång längsta"` <br> Förväntat: `"kort"`                                         | ✅ PASS      |
| TC6     | getLanguage() - svenska        | Input: `Svensk text med åäö` <br> Förväntat: `"Swedish"`                                           | ✅ PASS      |
| TC7     | getLanguage() - engelska       | Input: `Engelsk text med "the" och "a"` <br> Förväntat: `"English"`                                | ✅ PASS      |
| TC8     | getTitles() - Extrahera titlar | Input: `Text med 2 titlar` <br> Förväntat: `2 titlar extraheras`                                   | ✅ PASS      |
| TC9     | searchWord() - söka efter ord  | Input: `"detta är ett test detta är detta"`, sök `"detta"` <br> Förväntat: `3`                     | ✅ PASS      |
| TC10    | countParagraphs() - stycken    | Input: `"Första stycket.\\n\\nAndra stycket."`,<br> Förväntat: `2`                                 | ✅ PASS      |

## Testresulatat - Automatiska tester (basic-test.js)
## Vad som testas
- getWordCount()
- getLongestWord()
- getShortestWord()
- getSentenceCount()
- getParagraphCount()
- getTitles()
- getLanguage()
- searchWord('detta')
- summary()

## Denna text skickades in:

Detta är en Titel

Det här är en första mening. Detta är en andra mening! 
Och detta är en tredje mening?

Detta är ett nytt stycke med mer text. 
Det innehåller flera meningar också.

En Annan Titel

Mer text här.

## Resultat

DOKUMENTSTATISTIK

Ord: 44

Längsta ord: innehåller

Kortaste ord: är

Meningar: 6

Stycken: 5

Titlar: [ 'Detta är en Titel', 'En Annan Titel' ]

Språk: { language: 'Swedish', confidence: '100.0' }


Sök efter "detta": 4


FULLSTÄNDIG SAMMANFATTNING

{
  words: 44,

  sentences: 6,

  paragraphs: 5,

  titles: [ 'Detta är en Titel', 'En Annan Titel' ],

  language: { language: 'Swedish', confidence: '100.0' },

  longestWord: 'innehåller',

  shortestWord: 'är'
}

## Testresultat - terminal tester

## Vad som testats 

1. Frågan om att klistra in ett test stycke sedan avsluta med en tom rad följt av "KLAR" för att få all statisik förutom söka efter ord

2. Frågan skall sedan komma vilket ord du vill söka på och att trycka ENTER två gånger för att få fram hur många gånger det ord dykt upp

## Resultat

1. Fungerar utmärkt
2. Fungerar ej

## Sammanfattning
- Totalt antal manuella tester: 10
- Godkända:10

- Totalt med automatiska test: 9
- Godkända: 9

- Totalt med terminal test: 2
- Godkända: 1


OPPS: fler tester kan köras för varje metod på manuella tester
