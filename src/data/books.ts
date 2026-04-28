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
    description: "Uma distopia sobre vigilância extrema e manipulação da verdade.",
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
    description: "A jornada de Bilbo em uma aventura épica cheia de perigos.",
    year: 1937,
    pages: 310,
    genre: "Fantasia",
    isFavorite: false
  },
  {
    id: 3,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    description: "Um clássico brasileiro sobre ciúmes e memória.",
    year: 1899,
    pages: 256,
    genre: "Romance",
    isFavorite: false
  },
  {
    id: 4,
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    description: "O início da jornada mágica em Hogwarts.",
    year: 1997,
    pages: 320,
    genre: "Fantasia",
    isFavorite: false
  }
]);