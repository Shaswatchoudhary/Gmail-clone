import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';
import path from 'path';

const app = express();
const __dirname = path.resolve();

// Configure CORS to allow requests from the frontend
app.use(cors({
    origin: ['https://gmail-clone-eight-puce.vercel.app', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "./client/build")));

// Handle React routing, return all requests to React app
app.get("*", function (_, res) {    
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));