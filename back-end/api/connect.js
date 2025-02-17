import {MongoClient} from "mongodb";


const URI = "mongodb+srv://root:@cluster0.vso4q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
