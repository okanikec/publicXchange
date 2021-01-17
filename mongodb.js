


// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'xchange'

// const id = new ObjectID()
// console.log(id)
// console.log(id.id)

// MongoClient.connect(connectionURL, { useNewUrlParser: true}, {useUnifiedTopology: true}, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to  databse!')
//     }

//     const db = client.db(databaseName)

//     db.collection('traders').findOne({
//         username: 'ike',
//         location: 'USA'
//     }, (error, user) => {
//         if(error){
//             return console.log('unable to fetch')
//         }

//         console.log(user)
//     })

// })