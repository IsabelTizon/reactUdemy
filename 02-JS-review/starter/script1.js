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

// If no parameter is provided, the function will return the data
function getBook(id = null) {
	return id ? data.find((d) => d.id === id) : data;
}

const book = getBook(2);
book;
const secondAuthor = book.title;
console.log(secondAuthor);

const { title, author, genres, publicationDate } = book;
console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secundaryGenre = genres[1];
// console.log(primaryGenre, secundaryGenre);

// REST OPERATOR:...otherGenres. The rest opertor always has to be in the end of our array.
const [primaryGenre, secundaryGenre, ...otherGenres] =
	genres;
console.log(primaryGenre, secundaryGenre);
console.log(primaryGenre, secundaryGenre, otherGenres);

// Create a new element in the end of the existing array
const newGenres = [genres, "epic fantasy"];
newGenres;
// Putting the new element as a string in the end of our array doesn't meet the requirements because we saw that two arrays was created
// SPREAD OPERATOR: The spread operator is used to spread the elements of an array into another array
const secondNewGenres = [...genres, "epic fantasy"];
secondNewGenres;
const thirdNewGenres = ["epic fantasy", ...genres];
thirdNewGenres;

//Add new properties to an object or overwrite existing properties in an object: SPREAD OPERATOR
const updatedBook = {
	...book,
	// Adding a new property
	moviePublicationDate: "2001-12-19",

	// Overwriting an existing property
	pages: 1220,
};
updatedBook;
// TERNARY OPERATOR:operator thar takes three operands
const hasMovieAdaptation = book.hasMovieAdaptation
	? "has a movie adaptation"
	: "doesn't have a movie adaptation";
hasMovieAdaptation;
console.log(`The book ${title} ${hasMovieAdaptation}`);

// ARRROW FUNCTION: a shorter syntax for writing functions expressions. They are perfect for writting one-liner functions!!
const getYear = (year) => year.split("-")[0];
console.log(getYear(publicationDate));

const getData = (book) => {
	const date = book.publicationDate.split("-")[0];
	const numPages = book.pages;
	return `The book was publish in ${date}  and has ${numPages} pages.`;
};
console.log(getData(getBook(3)));

function getYear3(year) {
	return year.split("-")[0];
}
console.log(getYear3(publicationDate));

// TEMPLATE LITERALS: allows us to create strings that can include variables and expressions
const bookInfo = `${title} by ${author} contains ${
	genres.length
} genres and was published in ${getYear(
	publicationDate
)}. The book has ${
	book.hasMovieAdaptation ? "" : "not"
} been adapted as a movie.`;
bookInfo;

// SHORT-CIRCUITING AND LOGIICAL OPERATORS: &&, ||, ??

// 1) && OPERATOR:
// 1.1) when the first value is true it returns the second value
console.log(true && "Some str");
// 1.2)  when the firt value is false it returns the first value: false
console.log(false && "anotther str");

// 2) || OPERATOR:
// 2.1) when the first value is true it returns the firts value
// 2.2)  when the firt value is false it returns the second value

// 3) ?? OPERATOR:
// PROBLEMA: Que 0 sea data pero tb es un falsy value!
//Nullish Coalescing Operator: The nullish coalescing operator (??) returns the second value only if the first one is null or undefined. It does not do that if it is 0,  an empty string or false!!!
console.log(
	book.reviews.librarything.reviewsCount ??
		"No reviews available"
);

const countWrong =
	book.reviews.librarything.reviewsCount || "No data";
countWrong;
const countWrong2 =
	book.reviews.librarything.reviewsCount ?? "No data";
countWrong2;

// CHAINING OPERATOR: The optional chaining operator (?) allows us to access nested properties without having to check if each level of the chain is defined.
// function getRating(book) {
// 	const goodreadsRating = book.reviews.goodread.rating;
// 	const librarythingRating = book.reviews.librarything.rating;

// 	return goodreadsRating + librarythingRating;
// }
// console.log(getRating(book)); // Cannot read property 'rating' of undefined => UNDEFINED

// function getRating2(book) {
// 	const goodreadsRating = book.reviews.goodread?.rating;
// 	const librarythingRating =
// 		book.reviews.librarything.rating;

// 	return goodreadsRating + librarythingRating;
// }
// console.log(getRating2(book)); // NaN

function getRating3(book) {
	const goodreadsRating = book.reviews.goodreads.rating;
	const librarythingRating =
		book.reviews.librarything?.rating ?? 0;

	return goodreadsRating + librarythingRating;
}
console.log(getRating3(book));

// An optional chaining operator was added so JavaScript could read the rating property before accessing the potentially undefined librarything object.
// This is helpfull whenever we are not sure that all the values that we expect exist in an object. Then it is a goog paractise add ?.rating ?? 0; i the fist const jsut in case. We can even add it to the previous properties if we are not sure: book.reviews?.librarything?.rating ?? 0;
