import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';
import path from 'path';

const app = express();
const __dirname = path.resolve();

// Configure CORS to allow requests from the frontend
const corsOptions = {
    origin: [
        'https://gmail-clone-eight-puce.vercel.app',
        'http://localhost:3000',
        'http://localhost:8000'
    ],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API routes at /api
app.use('/api', routes);

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "./client/build")));

    // Handle React routing, return all requests to React app
    app.get('*', function (_, res) {    
        res.sendFile(path.join(__dirname, "./client/build/index.html"), function (err) {
            if (err) {
                res.status(500).send(err);
            }
        });
    });
}

const PORT = process.env.PORT || 8000;

// Handle preflight requests
app.options('*', cors(corsOptions));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Connect to database and start server
Connection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API Base URL: http://localhost:${PORT}/api`);
});