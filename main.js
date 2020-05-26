/* Episodes
//  number
//  air_date
//  synopsis

episode, 1, 10/10/1989, Sheriff discover's Laura Palmers body.

// episodes --> characters is many to many
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
id(PK) / Text / characterId(FK) / episodeId(FK) /
             or
id(PK) / Text             <--- Trying this way first

CHARACTERS_TO_QUOTES:
id(PK) / characterId(FK) / quoteId(FK) / *any other columns which are related to this combo.

QUOTES_TO_EPISODE:
id(PK) / quoteId(FK) / episodeId(FK)


//characters ---> quotes is either one to many or many to many.
// Quotes
text
location of quote
audience_score

// episodes to quotes one to many



// data that is similar but not identical
// organized via tables
// it allows us to group it together.
*/