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
/**
 REVIEW Script1
1.- Crea una funcion getBook que te devuelva o la data o solo la data de un id en concreto (ternary operator!!)

2.- Añade una nueva propiedad al objeto

3.- Añade un nuevo elemento al array

4.- Sobreescrive una propiedad del objeto

5.- Sobreescribe un elemento del array

6.- Ternary operator and template literals: The book ${title} ${hasMovieAdaptation}

7.- Ternary operator, arrow function and template literals: The "book" was publish in "1965" and has "658" pages.'

8.- Ternary operator, arrow function and template literals:

9.- The "bookName" by "author" contains "num of genres" genres and was published in "year". The book "has not been adapted as a movie"

10.- Chaining operator and short circuiting (logical operators: &&, ||, ?? => nullish coalesencing operator (??)): crea una variable en la que no the devuelva “not data” sino ) en el elemento de reviewsCount

11.- Chaining operator and short circuiting: return goodreadsRating + librarythingRating;
 */

const getBook = (id = null) =>
	id ? data.find((d) => d.id === id) : data;
//arrow function + ternary + find + arrow function
console.log(getBook(1));
console.log(getBook());

// Adding a new property to an object
const book2 = getBook(2);
console.log(book2);
const book3 = getBook(3);
const {
	id,
	title,
	publicationDate,
	author,
	genres,
	hasMovieAdaptation,
	pages,
	translations,
	reviews,
} = book3;

console.log(title);

const primaryGenre = genres[0];
console.log(primaryGenre);

const newProperty = {
	...book3,
	moviePublicationDate: "2001-12-19",
};
console.log(newProperty);

// Adding a new nested property
const newElementArr = {
	...book3,
	reviews: {
		...book3.reviews,
		goodreads: {
			...book3.reviews.goodreads,
			oldReviews: "from 1987",
		},
	},
};
console.log(newElementArr);

//Addind a new element
const newElement = {
	...book3,
	genres: [...book3.genres, "gore"],
};
console.log(newElement);

// Overwritting a property
const propertyOverwritted = {
	...book3,
	author: "Isabel Tizón",
};
console.log(propertyOverwritted);

// Overwritting a nested property
const nestedPropertyOverwritted = {
	...book3,
	reviews: {
		...book3.reviews,
		goodreads: {
			...book3.reviews.goodreads,
			oldReviews: "from now",
		},
	},
};
console.log(nestedPropertyOverwritted);

// Overwritting an array element
const elementOverwritted = {
	...book3,
	genres: [...book3.genres, "goreNOT"],
};
console.log(elementOverwritted);

// get the book title and see if it has a movie adaptation. arrowf + ternary + template literals
const getBookInfo = (book3) => {
	return book3.hasMovieAdaptation
		? `The book ${title} has a movie adaptation`
		: `The book ${title} hasn't a movie adaptation`;
};
console.log(getBookInfo(book3));

// The "bookName" by "author" contains "num of genres" genres and was published in "year". The book "has not been adapted as a movie"
const getBookInfo2 = (book3) => {
	const { title, author, pages } = book3;
	const publishedYear = book3.publicationDate.split("-")[0];
	const movieStatus = book3.hasMovieAdaptation
		? `has a movie adaptation`
		: `has not a movie adaptation`;
	return `The book ${title} by ${author} contains ${pages} and was published in ${publishedYear}. The book ${movieStatus}`;
};
console.log(getBookInfo2(book3));

// chaining and short circuiting with nullish coalescing

const getTotalRatings = (book2) => {
	return (
		book2.reviews.librarything.reviewsCount ||
		"No reviews available"
	);
}; // No deberia devolverme ""No reviews available" si no un 0
console.log(getTotalRatings(book2));

const getTotalRatingsNullishCoalescing = (book2) => {
	return (
		book2.reviews.librarything?.reviewsCount ??
		"No reviews available"
	);
}; // No deberia devolverme ""No reviews available" si no un 0
console.log(getTotalRatingsNullishCoalescing(book2));

const reviewsSumBook3 = (book3) => {
	return (
		(book3.reviews.goodreads?.rating ?? 0) +
		(book3.reviews.librarything?.rating ?? 0)
	);
};
console.log(reviewsSumBook3(book3));

//Review 2: Iterating Methods (map, filter, find, reduce, sort)
const books = getBook();
console.log(books);

const getAuthorsMap = (books) =>
	books.map((book) => book.author);
console.log(getAuthorsMap(books));

const getLongBooksFilter = (books) =>
	books.filter((book) => book.pages >= 550);
console.log(getLongBooksFilter(books));

const getLongBooksFind = (books) =>
	books.find((book) => book.pages >= 550);
console.log(getLongBooksFind(books));

// 📌📌📌📌📌 📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
// Find y filter: Ambos métodos sirven para buscar elementos dentro de un array
// FIND()
// ✅  solo devuelve el PRIMER elemento que cumpla con la condición.
// ✅ Si no encuentra nada, devuelve undefined.

// FILTER()
// ✅ Devuelve un array con TODOS los elementos que cumplan la condición.
// ✅ Si no encuentra nada, devuelve un array vacío [].

// REDUCE
const totalPagesReduce = (books) =>
	books.reduce((acc, curr) => acc + curr.pages, 0);
console.log(totalPagesReduce(books));

// SORT
const bookInAscPages = (books) =>
	books.sort((a, b) => a - b);
console.log(bookInAscPages(books));

const bookInAscPagesMapped = (books) => books.slice();
console.log(bookInAscPagesMapped(books));
const bookInAscPagesMapped2 = (books) =>
	books.slice().sort((a, b) => b.pages - a.pages);
console.log(bookInAscPagesMapped2(books));
const bookInAscPagesMapped3 = (book) =>
	book
		.slice()
		.sort((a, b) => b.pages - a.pages)
		.map((book) => `${book.title}: ${book.pages}`);
console.log(bookInAscPagesMapped3(books));

const bookInAscPagesMapped4 = (books) =>
	books
		.slice()
		.sort((a, b) => a.pages - b.pages)
		.filter((book) => book.pages >= 500)
		.map((book) =>
			book
				? `${book.title}: ${book.pages}`
				: `Sorry we don't have any book longer than 500 pages`
		);
console.log(bookInAscPagesMapped4(books));
