import MongoClient from 'mongodb';

async function getMongoClient() {
    const dbClient = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
    return dbClient.db('oriChatbot');
}

export default getMongoClient();