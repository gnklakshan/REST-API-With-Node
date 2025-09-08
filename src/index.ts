import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;
const MongoURL = process.env.MONGO_URL || 'mongodb+srv://artworkshop690:WvydN6SCmUKlAzeT@testing.rv7m8r3.mongodb.net/?retryWrites=true&w=majority&appName=testing';

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.Promise = Promise;
mongoose.connect(MongoURL);
mongoose.connection.on('error', (error:Error) => {
    console.error(`MongoDB connection error: ${error}`);
});
