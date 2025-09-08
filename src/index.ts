import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';

const app = express();
const port = process.env.PORT || 3000;

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