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
