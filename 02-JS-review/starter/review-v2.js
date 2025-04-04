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
				rating: 4.6,
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

// Mapping the array
const arrMappedAuthor = data.map((d) => d.author);
console.log(arrMappedAuthor);

const arrMappedTitle = data.map((d) => d.title);
console.log(arrMappedTitle);

const arrMappedpublicationDate = data.map(
	(d) => d.publicationDate
);
console.log(arrMappedpublicationDate);

const arrMappedGenres = data.map((d) => d.genres);
console.log(arrMappedGenres);

const arrMappedhasMovieAdaptation = data.map((d) =>
	d.hasMovieAdaptation
		? ` ${d.title} has a Movie Adaptation`
		: `${d.title} doesn't  has a Movie Adaptation`
);
console.log(arrMappedhasMovieAdaptation);

const arrMappedNumPages = data.map((d) =>
	d.pages >= 500
		? ` ${d.title} has ${d.pages} pages`
		: ` ${d.title} has ${d.pages} pages`
);
console.log(arrMappedNumPages);

const arrMappedTranslations = data.map((d) =>
	Object.keys(d.translations).length > 0
		? `${d.title} has ${
				Object.keys(d.translations).length
		  } translations`
		: `${d.title} hasn't any translations`
);
console.log(arrMappedTranslations);

const arrMappedTranslationsElements = data.map((d) =>
	Object.keys(d.translations).length > 0
		? `${d.title} has translations in: ${Object.keys(
				d.translations
		  )
				.map((lang, index) => `${index + 1}. ${lang}`)
				.join(", ")}`
		: `${d.title} hasn't any translations`
);

console.log(arrMappedTranslationsElements);

//
const arrMappedReviews = data.map((d) =>
	Object.keys(d.reviews).length > 0
		? `${d.title} has the reviews of: ${Object.keys(
				d.reviews
		  )
				.map((r, index) => `${index + 1}. ${r}`)
				.join(", ")}`
		: `${d.title} hasn't any reviews`
);
console.log(arrMappedReviews);

// RETURN ALL THE MOVIES WITH A GOODREADS RATING HIGHER THAN 4,50
const highestGoodreadsRating = data.filter(
	(d) => d.reviews?.goodreads?.rating >= 4.5 ?? 0
);
console.log(highestGoodreadsRating);

//RETURN TOTAL RATINGCOUNT AND THE TOTAL REVIEWSCOUNT
const totalGoodreadCount =
	data.reduce(
		(acc, curr) =>
			acc + (curr.reviews?.goodreads?.ratingsCount || 0),
		0
	) +
	data.reduce(
		(acc, curr) =>
			curr.reviews?.goodreads?.reviewsCount || 0,
		0
	);

console.log(totalGoodreadCount);

// RETURN THE FIRST ELEMENT WHERE THE PUBLICATION YEAR WAS AFTER 1990;
const firstBookAfter1990 = data.find((b) => {
	const year = Number(b.publicationDate.slice(0, 4)); // extrae el año
	return year > 1990;
});

console.log(firstBookAfter1990);
console.log(
	firstBookAfter1990
		? `${firstBookAfter1990.title} was the first book published after 1990.`
		: "No book was published after 1990."
);
