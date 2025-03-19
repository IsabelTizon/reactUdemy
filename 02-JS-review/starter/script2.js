const data = [
	{
		id: 1,
		title: "The Lord of the Rings",
		publicationDate: "1954-07-29",
		author: "J. R. R. Tolkien",
		genres: [
			"fantasy",
			"high-fantasy",
			"adventure",
			"fiction",
			"novels",
			"literature",
		],
		hasMovieAdaptation: true,
		pages: 1216,
		translations: {
			spanish: "El señor de los anillos",
			chinese: "魔戒",
			french: "Le Seigneur des anneaux",
		},
		reviews: {
			goodreads: {
				rating: 4.52,
				ratingsCount: 630994,
				reviewsCount: 13417,
			},
			librarything: {
				rating: 4.53,
				ratingsCount: 47166,
				reviewsCount: 452,
			},
		},
	},
	{
		id: 2,
		title: "The Cyberiad",
		publicationDate: "1965-01-01",
		author: "Stanislaw Lem",
		genres: [
			"science fiction",
			"humor",
			"speculative fiction",
			"short stories",
			"fantasy",
		],
		hasMovieAdaptation: false,
		pages: 295,
		translations: {},
		reviews: {
			goodreads: {
				rating: 4.16,
				ratingsCount: 11663,
				reviewsCount: 812,
			},
			librarything: {
				rating: 0,
				ratingsCount: 2434,
				reviewsCount: 0,
			},
		},
	},
	{
		id: 3,
		title: "Dune",
		publicationDate: "1965-01-01",
		author: "Frank Herbert",
		genres: ["science fiction", "novel", "adventure"],
		hasMovieAdaptation: true,
		pages: 658,
		translations: {
			spanish: "",
		},
		reviews: {
			goodreads: {
				rating: 4.25,
				ratingsCount: 1142893,
				reviewsCount: 49701,
			},
		},
	},
	{
		id: 4,
		title: "Harry Potter and the Philosopher's Stone",
		publicationDate: "1997-06-26",
		author: "J. K. Rowling",
		genres: ["fantasy", "adventure"],
		hasMovieAdaptation: true,
		pages: 223,
		translations: {
			spanish: "Harry Potter y la piedra filosofal",
			korean: "해리 포터와 마법사의 돌",
			bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
			portuguese: "Harry Potter e a Pedra Filosofal",
		},
		reviews: {
			goodreads: {
				rating: 4.47,
				ratingsCount: 8910059,
				reviewsCount: 140625,
			},
			librarything: {
				rating: 4.29,
				ratingsCount: 120941,
				reviewsCount: 1960,
			},
		},
	},
	{
		id: 5,
		title: "A Game of Thrones",
		publicationDate: "1996-08-01",
		author: "George R. R. Martin",
		genres: [
			"fantasy",
			"high-fantasy",
			"novel",
			"fantasy fiction",
		],
		hasMovieAdaptation: true,
		pages: 835,
		translations: {
			korean: "왕좌의 게임",
			polish: "Gra o tron",
			portuguese: "A Guerra dos Tronos",
			spanish: "Juego de tronos",
		},
		reviews: {
			goodreads: {
				rating: 4.44,
				ratingsCount: 2295233,
				reviewsCount: 59058,
			},
			librarything: {
				rating: 4.36,
				ratingsCount: 38358,
				reviewsCount: 1095,
			},
		},
	},
];
function getBooks() {
	return data;
}
function getBook(id) {
	return data.find((d) => d.id === id);
}
const books = getBooks();
books;

// THE ARRAY MAP METHOD
const getTitles = books.map((book) => book.title);
getTitles;

const essentialData = books.map(
	(book) => `${book.title} by ${book.author}`
);
essentialData;

const essentialData2 = books.map((book) => ({
	title: book.title,
	author: book.author,
}));
essentialData2;

// THE ARRAY FILTER METHOD
const longBooks = books
	.filter((book) => book.pages >= 500)
	.filter((book) => book.hasMovieAdaptation);
console.log(longBooks);
// The second filter works because the first one returns an array of objects

const adventureBooks = books
	.filter((book) => book.genres.includes("adventure"))
	.map((book) => book.title);
adventureBooks;
// Includes method always return tru or false

// THE ARRAY REDUCE METHOD
const totalPages = books
	.map((book) => book.pages)
	.reduce((acc, curr) => {
		return acc + curr;
	}, 0);
totalPages;

// THE ARRAY SORT METHOD
// It's use to order the elements of an array but modifies the original array. It orders the elements as str by default
const demo = [3, 7, 1, 9, 6];
const sortDemoAsc = demo.sort((a, b) => a - b);
sortDemoAsc;
const sortDemoDesc = demo.sort((a, b) => b - a);
sortDemoDesc;

demo;
//The array has been modified!

const demo2 = [3, 7, 1, 9, 6];
const sortDemoAsc2 = demo.slice().sort((a, b) => a - b);
sortDemoAsc2;

demo2;
// The slice method makes a copy of the array, returning a brand new array that it is identical to the original. This keeps the original array in the same order and does not mutate it.

const sortedByPages = books
	.slice()
	.sort((a, b) => a.pages - b.pages)
	.map(
		(book) => `${book.title} contains ${book.pages} pages`
	);
sortedByPages;

// WORKING WITH INMUTABLE ARRAYS
// 1) ADD
// ... Spread Operator
const newBook = {
	title: "Harry Potter and the Chamber of secrets",
	author: "J. K. Rowling",
};
const originalArr = [...books];
const booksAfterAdd = [...books, newBook];
booksAfterAdd;
originalArr;

// 2) DELETE
// filter()
const booksAfterDelete = booksAfterAdd.filter(
	(book) => book.id !== 3
);
booksAfterDelete;

// 3) UPDATE
// map()
const booksAfterUpdate = booksAfterDelete.map((book) =>
	book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;
