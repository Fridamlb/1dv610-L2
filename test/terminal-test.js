import DocumentStats from '../src/DocumentStats.js'
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function main() {
    console.log('Klistra in texten och tryck Ctrl+D när du är klar:\n')
    
    let lines = []
    
    rl.on('line', (line) => {
        lines.push(line)
    })
    
    rl.on('close', () => {
        const inputText = lines.join('\n')
        
        if (!inputText.trim()) {
            console.log('Ingen text angiven.')
            rl.close()
            return
        }
        
        const doc = new DocumentStats(inputText)
        console.log('\nSammanfattning:')
        console.log(JSON.stringify(doc.summary(), null, 2))
        
        // Starta ord-sökning
        askForWordSearch(doc)
    })
}

function askForWordSearch(doc) {
    const searchRl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    searchRl.question('\nVilket ord vill du söka efter? Skriv ordet och tryck Enter: ', (searchWord) => {
        if (searchWord.trim()) {
            const count = doc.searchWord(searchWord.trim())
            console.log(`\nOrdet "${searchWord}" förekommer ${count} gånger i texten`)
        }
        
        searchRl.close()
        process.exit(0)
    })
}

main()