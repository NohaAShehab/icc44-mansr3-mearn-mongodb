// 1- show databases
// show databases

// 2- create collection
db.createCollection("courses")

// 3- create collection , and add document in the same line 

db.tracks.insertOne({name:"Mearn", courses: ['mongo', 'js'], duration: 4 })

db.tracks.insertOne({name:"ai", duration: 9, max_std:20 })


// 4- to list all inserted tracks
db.tracks.find() // return with all documents in this collection


db.students.find()

db.branches.find()


// define instructor array 

name = 'noha'
num1 = 10 
num2 = 20 
num3 = num1 + num2 





























