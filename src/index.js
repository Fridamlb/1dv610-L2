import DocumentStats from './DocumentStats.js'

// Export huvudklassen som standard
export default DocumentStats

// Export individuella analyzers
export { default as WordAnalyzer } from './WordAnalyzer.js'
export { default as SentenceAnalyzer } from './SentenceAnalyzer.js'
export { default as ParagraphAnalyzer } from './ParagraphAnalyzer.js'
export { default as TitleExtractor } from './TitleExtractor.js'