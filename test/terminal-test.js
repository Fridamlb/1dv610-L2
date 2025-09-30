import DocumentStats from '../src/DocumentStats.js'
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('=== DOKUMENTANALYSATOR ===')
console.log('Skriv eller klistra in din text. Avsluta med en tom rad följt av "KLAR".\n')

let inputText = ''
let lines = []

rl.on('line', (line) => {
  if (line.trim() === 'KLAR' && lines[lines.length - 1] === '') {
    rl.close()
  } else {
    lines.push(line)
  }
})

rl.on('close', () => {
  inputText = lines.join('\n')
  
  if (!inputText.trim()) {
    console.log('Ingen text angavs.')
    process.exit(0)
  }

  const stats = new DocumentStats(inputText)
  const summary = stats.summary()
  
  console.log('\nRESULTAT')
  console.log(`Antal ord: ${summary.words}`)
  console.log(`Antal meningar: ${summary.sentences}`)
  console.log(`Antal stycken: ${summary.paragraphs}`)
  console.log(`Språk: ${summary.language.language} (${summary.language.confidence}% säkerhet)`)
  console.log(`Titlar funna: ${summary.titles.length}`)
  
  if (summary.titles.length > 0) {
    console.log('\nTitlar:')
    summary.titles.forEach((title, i) => {
      console.log(`  ${i + 1}. ${title}`)
    })
  }
  
  process.exit(0)
})