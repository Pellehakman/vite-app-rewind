import Datastore from 'nedb'

const database = new Datastore("database.db")
database.loadDatabase();
console.log('server is running')