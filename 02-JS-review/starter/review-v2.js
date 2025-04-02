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

// 1. RETURN ALL DATA
const getAllBooks = () => {
	return data;
};
console.log(getAllBooks());

// 2. RETURN THE BOOK DATA
const getBook = (id) => {
	return data.find((d) => d.id === id);
};
console.log(getBook(2));

// 3. RETURN THE LONGEST BOOK
// In this case find() only returns the first element that meets a condition, while we need to compare all the elements in the array to find the one with the most pages!
const longestBook = () => {
	return data.reduce((acc, curr) => {
		return acc.pages > curr.pages ? acc : curr;
	}, data[0]);
};
console.log(longestBook());

// 4. RETURN THE BOOK MORE REVIEWING
// Error: Cannot read properties of undefined (reading 'reviewsCount')
console.log(data[0].reviews.goodreads.reviewsCount);
// opcional chaining (?.)
const mostReviews = () => {
	return data.reduce(
		(acc, curr) =>
			(acc.reviews?.goodreads?.reviewsCount || 0) >
			(curr.reviews?.goodreads?.reviewsCount || 0)
				? acc
				: curr,
		data[0]
	);
};
console.log(mostReviews());

// 5. RETURN THE BOOK IF EXIST IF NOT ALL THE DATA
const getID = (id) => data.find((book) => book.id === id);
console.log(getID(8)); // Returns the book and its id or undefined if doesn't exist

//6. RETURN THE DATA IF THE BOOK DOESN'T EXIST
// parameter we are gonna looking for
// data.find()
// ((d) => d.id === id)
// || data
const getSth = (id) =>
	data.find((d) => d.id === id) || data;
console.log(getSth(8));

// 7. ADD A PROPERTY
// iterate by mapping
// spread operator to keep the original array
// add new property creating a condition
const newDb = data.map((book) => ({
	...book,
	isSaga: book.pages > 500,
}));
console.log(newDb);
