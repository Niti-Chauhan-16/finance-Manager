const {MongoClient} = require('mongodb');

module.exports = async function getData(){
    const uri = 'mongodb://127.0.0.1:27017'; 
    const dbName = 'niti'; 

    const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
    let result = await client.connect()
    console.log('db is connected')  
    return result.db(dbName)
}
