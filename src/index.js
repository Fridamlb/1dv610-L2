import DocumentStats from './DocumentStats.js'

let inputText = ''

process.stdin.setEncoding('utf8')

process.stdin.on('data', chunk => {
    inputText += chunk
})

process.stdin.on('end', () => {
    if (!inputText.trim()) {
        console.log('Ingen text angiven.')
        process.exit(1)
    }

    const doc = new DocumentStats(inputText)
    console.log('\nSammanfattning:')
    console.log(JSON.stringify(doc.summary(), null, 2))
})

console.log('Klistra in texten och tryck Ctrl+D när du är klar:')
