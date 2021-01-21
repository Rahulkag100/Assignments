create database:
Connect to a running mongo instance
database Name : mongo_practice

Insert Documents:

use mongo_practice
db.createCollection("movies")
db.movies.insert(
{
    title:"Fight Club",
    writer:"Chuck Palahniuko",
    year:"1999",
    actors : ["Brad Pitt", 
    "Edward Norton"]
},
{
    title : "Pulp Fiction",
writer : 'Quentin Tarantino',
year : "1994",
actors : [
 "John Travolta",
 "Uma Thurman"
]
},
{
title : "Inglorious Basterds",
writer : "Quentin Tarantino",
year : "2009",
actors : [
 "Brad Pitt",
 "Diane Kruger",
 "Eli Roth"
]
},
{
    title : "The Hobbit: An Unexpected Journey",
writer : "J.R.R. Tolkein",
year : "2012",
franchise : "The Hobbit",
},
{
    title : "The Hobbit: The Desolation of Smaug",
writer : "J.R.R. Tolkein",
year : "2013",
franchise : "The Hobbit"
},
{
    title : "The Hobbit: The Battle of the Five Armies",
writer : "J.R.R. Tolkein",
year : "2012",
franchise : "The Hobbit",
synopsis : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
},
{title : "Pee Wee Herman's Big Adventure"},
{title : "Avatar"}
)


Query / Find Documents:



db.movies.find().pretty()
db.movies.find({"writer":"Quentin Tarantino"})
db.movies.find({actors:"Brad Pitt"})
db.movies.find({franchise:"The Hobbit"})
db.movies.find({year:{$gt:"1990", $lt:"2000"}})
db.movies.find({$or:[{year:{$gt:"2010"}},{year: {$lt:"2000"}}]})

Update Documents:



db.movies.update({_id:ObjectId("5ffecc48dcf60e44907eec70")}, {$set:{synopsis:"A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})
db.movies.update({_id:ObjectId("5ffeccfcdcf60e44907eec71")}, {$set:{synopsis:"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})
db.movies.update({_id:ObjectId("5ffeccfcdcf60e44907eec68")}, {$push:{actors:"Samuel L. Jackson"}})


Text Search:


db.movies.find({synopsis:{$regex:"Bilbo"}})
db.movies.find({synopsis:{$regex:"Gandalf"}})
db.movies.find({$and:[{synopsis:{$regex:"Bilbo"}}, {synopsis:{$not:/Gandalf/}}]})
db.movies.find({$or:[{synopsis:{$regex:"dwarves"}}, {synopsis:{$regex:"hobbit"}}]})
db.movies.find({$and:[{synopsis:{$regex:"gold"}}, {synopsis:{$regex:"dragon"}}]})


Delete Documents:


db.movies.remove({_id:ObjectId("5ffeccfcdcf60e44907eec73")})
db.movies.remove({_id:ObjectId("5ffeccfcdcf60e44907eec74")})





Relationships:

Users:

db.users.insert({_id:1,username:"GoodGuyGreg", first_name:"Good Guy", last_name:"Greg"})
db.users.insert({_id:2, username:"ScumbagSteve", fullname:{first: "Scumbag", last:"Steve"}})

Posts:

db.posts.insert({username:"GoodGuyGreg", title:"Passes out at Party", body:"Raises your credit score"})
db.posts.insert({ username:"GoodGuyGreg", title:"Steals your identity", body:"Raises your credit score"})
db.posts.insert({username:"GoodGuyGreg", title:"Reports a bug in your code", body:"Sends you a pull request"})
db.posts.insert({ username:"ScumbagSteve", title:"Borrows something", body:"Sells it"})
db.posts.insert({ username:"ScumbagSteve", title:"Borrows everything", body:"The end"})
db.posts.insert({username:"ScumbagSteve", title:"Forks your repo on github", body:"Sets to private"})

Comments:


db.comments.insert({ username:"GoodGuyGreg", comment:"Hope you got a good deal!", post:ObjectId("5ffed2b713a2fe9e3a99313a")})
db.comments.insert({username:"GoodGuyGreg", comment:"What's mine is yours!", post:ObjectId("5ffed2c113a2fe9e3a99313b")})
db.comments.insert({username:"GoodGuyGreg", comment:"Don't violate the licensing agreement!", post:ObjectId("5ffed2cb13a2fe9e3a99313c")})
db.comments.insert({username:"ScumbagSteve", comment:"It still isn't clean", post:ObjectId("5ffed29613a2fe9e3a993137")})
db.comments.insert({username:"ScumbagSteve", comment:"Denied your PR cause I found a hack", post:ObjectId("5ffed2ab13a2fe9e3a993139")})


Querying related collections:

db.users.find().pretty()
db.posts.find().pretty()
db.posts.find({username:"GoodGuyGreg"})
db.posts.find({username:"ScumbagSteve"})
db.comments.find().pretty()
db.comments.find({username:"GoodGuyGreg"})
db.comments.find({username:"ScumbagSteve"})
db.comments.find({post:ObjectId("5ffed2ab13a2fe9e3a993139")}