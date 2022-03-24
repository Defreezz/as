const USER_NAME = process.env.MONGO_DB_USER_NAME || "Defreezz";
const PASSWORD = process.env.MONGO_DB_USER_PASSWORD || "1360674";
const MONGO_DB_URL = process.env.MONGODB_URI || "cluster0.jrx2n.mongodb.net/Test"; // bd for tests

export const MongoDBUris = `mongodb+srv://${USER_NAME}:${PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`;




