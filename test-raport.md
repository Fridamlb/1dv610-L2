# Testrapport - Document Stats Analyzer

## Testmetod
Manuella tester genom automatisk testapplikation som kör testfall och jämför faktiskt resultat med förväntat resultat.

## Hur testerna körs
npm test i zsh terminal på mac.

## Testresultat

Här redovisas tester för modulen. Tabellen visar vad som testats, hur testet genomfördes samt resultatet. ✅ = PASS, ❌ = FAIL

| Test-ID | Vad som testats                | Hur det testats (Input + Förväntat)                                                                 | Testresultat |
|---------|--------------------------------|-----------------------------------------------------------------------------------------------------|--------------|
| TC1     | getWordCount() - grundläggande | Input: `"Detta är ett test"` <br> Förväntat: `4 ord`                                               | ✅ PASS      |
| TC2     | getWordCount() - tom text      | Input: `""` (tom sträng) <br> Förväntat: `0 ord`                                                   | ✅ PASS      |
| TC3     | getSentenceCount()             | Input: `"Första. Andra! Tredje?"` <br> Förväntat: `3 meningar`                                     | ✅ PASS      |
| TC4     | getLongestWord()               | Input: `"kort medellång längsta"` <br> Förväntat: `"medellång"`                                    | ✅ PASS      |
| TC5     | getShortestWord()              | Input: `"kort medellång längsta"` <br> Förväntat: `"kort"`                                         | ✅ PASS      |
| TC6     | getLanguage() - svenska        | Input: `Svensk text med åäö` <br> Förväntat: `"Swedish"`                                           | ✅ PASS      |
| TC7     | getLanguage() - engelska       | Input: `Engelsk text med "the" och "a"` <br> Förväntat: `"English"`                                | ✅ PASS      |
| TC8     | getTitles()                    | Input: `Text med 2 titlar` <br> Förväntat: `2 titlar extraheras`                                   | ✅ PASS      |
| TC9     | searchWord()                   | Input: `"detta är ett test detta är detta"`, sök `"detta"` <br> Förväntat: `3`                     | ✅ PASS      |
| TC10    | getUniqueWordCount()           | Input: `"test test annat test ord"` <br> Förväntat: `3 unika ord`                                  | ✅ PASS      |
| TC11    | getMostCommonWord()            | Input: `"test test annat test ord"` <br> Förväntat: `"test"`                                       | ✅ PASS      |


## Sammanfattning
Totalt antal tester: 11
GOdkända:11
Fler tester som skall köras: 
- Paragraf test