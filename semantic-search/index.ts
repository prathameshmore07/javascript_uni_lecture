import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { OllamaEmbeddings } from "@langchain/ollama";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";

// Load PDF
const loader = new PDFLoader("./nke-10k-2023.pdf");
const docs = await loader.load();

// Split text
const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});

const splits = await textSplitter.splitDocuments(docs);

// Embeddings
const embeddings = new OllamaEmbeddings({
  model: "nomic-embed-text",
});

// Vector store
const store = await MemoryVectorStore.fromDocuments(
  splits,
  embeddings
);

// Search
const results = await store.similaritySearch(
  "When was Nike founded?",
  3
);

console.log(results);