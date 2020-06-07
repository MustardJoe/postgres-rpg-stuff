Learning PostgreSQL with code-bros team (me and LL)!

Notes on Data Structure:

// UPDATE table_name
// SET column1 = value1, column2 = value2...., columnN = valueN.
// WHERE [condition];

/* Episodes
//  number
//  air_date
//  synopsis

episode, 1, 10/10/1989, Sheriff discover's Laura Palmers body.

// Characters
img
bio
actor name
name
job

CHARACTERS:
id(PK) / Name / Bio / Actor / Job / ImgPath

EPISODES:
id(PK) / episodeName / synopsis / airDate / Season

QUOTES:
id(PK) / Text /  episodeId(FK)  <-- episodes tracked here in quotes because each quote
//                                   can only come from one episode, but characters stored
//                                 elsewhere because a quote can be bit of dialoge between
//                                 more than one character.

CHARACTERS_TO_QUOTES:
id(PK) / characterId(FK) / quoteId(FK) / *any other columns which are related to this combo.

QUOTES_TO_EPISODE:
id(PK) / quoteId(FK) / episodeId(FK)

// episodes to quotes one to many
// data that is similar but not identical
// organized via tables
// it allows us to group it together.
*/


more notes:

//http://knexjs.org/
//knex.select('title', 'author', 'year').from('books')
/**
 * books
 * id, name, author_id
 * 1, a, 1
 * 2, b, 2
 * 3, c, 2
 * 4, d, null
 * 
 * SELECT (column) from (table) JOIN (second_table) ON table.second_table_id = second_table.id WHERE table.id = ${some author id};
 * 
 * SELECT authors.id, authors.name, books.id, books.name 
 *     FROM authors JOIN books 
 *         ON books.author_id = authors.id 
 *     WHERE authors.id = ${some author id};
 * 
 * authors 
 * id, name, genre
 * 1, homer, classics
 * 2, Italo Calvino, experimental
 * 
 * 
 * 
 * Intersection
 * id(book), name(book), author_id, id(author), name(author), genre
 * 1, a, 1, 1, homer, classics
 * 2, b, 2, 2, IC, experimental
 * 3, c, 2, 2, IC, experimental
 *
 *
 * Union
 * id(book), name(book), author_id, id(author), name(author), genre
 * 1, a, 1, 1, homer, classics
 * 1, a, 1, 2, IC, experimental
 * 8 total rows
 * 
 */