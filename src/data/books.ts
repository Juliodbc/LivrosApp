import { reactive } from "vue";

export type Book = {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
  year: number;
  pages: number;
  genre: string;
  isFavorite: boolean;
};

export const books = reactive<Book[]>([
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    description: "Em um futuro distópico dominado por um regime totalitário, Winston Smith vive sob constante vigilância do Grande Irmão. Nesse mundo, o governo controla não apenas as ações, mas também os pensamentos das pessoas, manipulando informações e reescrevendo a história conforme seus interesses. Ao começar a questionar o sistema, Winston embarca em uma jornada perigosa de resistência, enfrentando o medo, a repressão e a perda da liberdade individual.",
    year: 1949,
    pages: 328,
    genre: "Distopia",
    isFavorite: false
  },
  {
    id: 2,
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    description: "Bilbo Bolseiro leva uma vida tranquila até ser recrutado para uma jornada ao lado de anões e do mago Gandalf. Ao longo da aventura, enfrenta perigos, criaturas e desafios que testam sua coragem. A obra mistura fantasia, crescimento pessoal e descobertas em um universo rico e envolvente.",
    year: 1937,
    pages: 310,
    genre: "Fantasia",
    isFavorite: false
  },
  {
    id: 3,
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    description: "Harry descobre ser um bruxo e inicia sua jornada em Hogwarts. Entre amizades, aprendizados e mistérios, ele começa a entender seu passado e o destino que o aguarda. Uma história envolvente sobre coragem, amizade e magia.",
    year: 1997,
    pages: 320,
    genre: "Fantasia",
    isFavorite: false
  },
  {
    id: 4,
    title: "A Arte de Ligar o F*da-se",
    author: "Mark Manson",
    image: "https://covers.openlibrary.org/b/id/8231990-L.jpg",
    description: "Neste livro provocativo, Mark Manson apresenta uma abordagem diferente sobre sucesso e felicidade. Em vez de buscar positividade o tempo todo, ele propõe aceitar as limitações da vida e focar no que realmente importa. Com linguagem direta e exemplos reais, a obra questiona crenças comuns e incentiva o leitor a desenvolver maturidade emocional, responsabilidade e clareza sobre suas prioridades.",
    year: 2016,
    pages: 224,
    genre: "Desenvolvimento pessoal",
    isFavorite: true
  }
]);